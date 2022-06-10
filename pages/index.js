import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header.js'
import Filters from '../components/filters.js'
import RoutesCards from '../components/RoutesCards.js'
import React, { useState } from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import styles from 'mapbox/lib/services/styles';
import NavBar from '../components/NavBar.js'



export default function Home({ routesList }) {

  // working filters and state
  // Next step is to move filters into component

  const [routeState, setRoutes] = useState(routesList.routes);

  function showAllRoutes(routesList) {
    return routesList.routes.slice();
  }  

  function showRoutesUnderHundred(routesList) {
    return routesList.routes.slice().filter(route => parseInt(route.distance) > 100);
  }    

  function showRoutesHighElevation(routesList) {
    return routesList.routes.slice().filter(route => parseInt(route.elevation) > 800);
  }    

    return (
      <>
        
        <NavBar />
        
        <main className="container">
          <Head>
            <title>trails.cc</title>
          </Head>
          <Header />
          <Filters /> 
          
          <div className='filters'>
            <button onClick={() => setRoutes(showAllRoutes(routesList))}>All</button>
          </div>

          <div className='filters'>
            <button onClick={() => setRoutes(showRoutesUnderHundred(routesList))}>Routes under 100k</button>
          </div>

          <div className='filters'>
            <button onClick={() => setRoutes(showRoutesHighElevation(routesList))}>Lots of hills</button>
          </div>

          <RoutesCards routeState={routeState} /> 
        
        </main>
    </>
  )
}

// read routes from json file (routesfile.json)
// getStaticProps runs server-side only
// TO IMPROVE: file reading code seems verbose and I'm unsure on async behaviour

export async function getStaticProps() {
  const routesDirectory = path.join(process.cwd(), 'routes-directory')
  const filenames = await fs.readdir(routesDirectory);
  const filePath = path.join(routesDirectory, filenames[0])
  const routesFile = await fs.readFile(filePath, 'utf8')
  const routes = JSON.parse(routesFile)

  return {
      props: { 
          routesList: routes,
      },
  }

}