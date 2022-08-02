import Head from 'next/head'
import Link from 'next/link'

import IndexHeader from '../components/indexHeader.js'
import Filters from '../components/Filters.js'
import RoutesCards from '../components/RoutesCards.js'

import React, { useState } from 'react';
import { promises as fs } from 'fs';
import path from 'path';

import styles from 'mapbox/lib/services/styles';
import NavBar from '../components/NavBar.js'
import HeroPost from '../components/HeroPost.js'



export default function Home({ routesList }) {

  // define state and store in parent component
  
  const [routeState, setRoutes] = useState(routesList.routes); 

    return (
      <>
        <NavBar />
        <main className="container">
          <IndexHeader />
          <Header />
          <HeroPost routesList={routesList}/>
          <Filters routesList={routesList} setRoutes={setRoutes}/> 
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