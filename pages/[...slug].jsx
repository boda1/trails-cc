import Head from 'next/head';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

import content from '../routes-directory/routesfile.json'

import React, { useState } from 'react';
import { promises as fs } from 'fs';
import path from 'path';

export default function Page({page}) {
  return (
      <>
        {/* <Head>
          <title>{page.title} | {content.title}</title>
        </Head> */}
        <NavBar />
        <Header pageTitle={page.route} />

        <main>
          <div dangerouslySetInnerHTML={{__html: page.content}}></div>
        </main>
      </>
  );
}

export async function getStaticPaths() {
  const paths = content.routes.map(page => {
    const slug = page.path.split('/').slice(1);
    return {
      params: {
        slug
      }
    };
  });
  return {paths, fallback: true};
}

export async function getStaticProps({params}) {
  const currentPath = `/${params.slug.join('/')}`;
  const page = content.routes.find(page => page.path === currentPath) || {notfound: true};

  return {
    props: {
      page    }
  };
}