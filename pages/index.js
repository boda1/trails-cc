import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/header.js'
import Filters from '../components/filters.js'
import RoutesCards from '../components/RoutesCards.js'

import React, { useState } from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import styles from 'mapbox/lib/services/styles';



export default function Home({ routesList }) {

  // adding routesList to state so that filtering routes causes the list to re-render

  const [routes, setRoutes] = useState({ routesList });

    function filterRoutes(routes) {
        // const routes = routesList.routes.slice().filter(route => parseInt(route.distance) > 100);
        return console.log(routes);
        // return routes.slice().filter(route => parseInt(route.distance) > 100);
      }  

    console.log(routesList.routes)
  
    return (
    <div className="container">
      <Head>
        <title>trails.cc</title>
      </Head>
      <Header />
      <Filters /> 
      
  
      <div className='filters'>
        <button onClick={() => setRoutes(filterRoutes("Test output"))}>Show routes under 100k</button>
      </div>

      <RoutesCards routesList={routesList} /> 
    
    </div>
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