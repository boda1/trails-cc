import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header.js'
import Filters from '../components/filters.js'
// import Routes from '../components/routes.js'
import { promises as fs } from 'fs';
import path from 'path';
import styles from 'mapbox/lib/services/styles';


export default function Home({ routesList }) {
  console.log(routesList);
  return (
    <div className="container">
      <Head>
        <title>trails.cc</title>
      </Head>
      <Header />
      <Filters />
      <ul className="route-cards" >
        {routesList.routes.map(route =>  
          <li className='route-card' key={route.id}>
            {route.route}
          </li>
        )}
      </ul> 
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