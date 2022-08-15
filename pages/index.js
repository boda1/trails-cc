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

  // define state and store in parent component
  
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
  // get route data
  const routesDirectory = path.join(process.cwd(), 'routes-directory');
  const filenames = await fs.readdir(routesDirectory);
  const filePath = path.join(routesDirectory, filenames[0]);
  const routesFile = await fs.readFile(filePath, 'utf8');
  const routes = JSON.parse(routesFile);

  // get weather data
  const weatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=' + process.env.WEATHER_API_KEY;
  const res = await fetch(weatherEndpoint);
  const data = await res.json();
    
  // console.log('Weather data:', data);


  return {
      props: { 
          routesList: routes,
          weatherData: data,
      },
  }
}

