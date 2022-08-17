import Head from 'next/head'
import Link from 'next/link'
import IndexHeader from '../components/indexHeader.js'
import Filters from '../components/Filters.js'
import RoutesCards from '../components/RoutesCards.js'
import React, { useState } from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import NavBar from '../components/NavBar.js'
import HeroPost from '../components/HeroPost.js'
import styles from '../styles/index.module.css'

export default function Home(props) {

  console.log(props.routesList);

  const [routeState, setRoutes] = useState(props.routesList.routes); 

    return (
      <>
      <NavBar />
        <main className="container">
          <HeroPost routesList={props.routesList} weatherData={props.weatherData} />
          <Filters routesList={props.routesList} setRoutes={setRoutes} /> 
          <section className={styles.cardSection}>
            <RoutesCards routeState={routeState} /> 
          </section>

        </main>
    </>
  )
}

// Get route and weather-API data

export async function getServerSideProps() {
  
  // Get route data

  const routesDirectory = path.join(process.cwd(), 'routes-directory');
  const filenames = await fs.readdir(routesDirectory);
  const filePath = path.join(routesDirectory, filenames[0]);
  const routesFile = await fs.readFile(filePath, 'utf8');
  const routes = JSON.parse(routesFile);


  // Get weather data

  const routeLatitude = [];
  const routeLongitude = [];
  const weatherEndpoints = [];
  const weatherDataArray = [];

  for (let i=0; i < routes.routes.length; i++) {
    routeLatitude[i] = routes.routes[i].latitude;
    routeLongitude[i] = routes.routes[i].longitude;
    weatherEndpoints[i] = 'https://api.openweathermap.org/data/2.5/weather?lat=' + routeLatitude[i] + '&lon=' + routeLongitude[i] + '&appid=' + process.env.WEATHER_API_KEY;
    const res = await fetch(weatherEndpoints[i]);
    weatherDataArray[i] = await res.json();
    routes.routes[i].weather = weatherDataArray[i];
  }
    
  return {
      props: { 
          routesList: routes,
      },
  }
}

