import Head from 'next/head';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

import content from '../routes-directory/routesfile.json'

import React, { useState } from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';

import styles from '../styles/blogPost.module.css'

export default function Page({page}) {
  return (
      <>
        <Head>
          <title> {page.route} | Routes.cc </title>
        </Head>
        <NavBar />
        <Header pageTitle={page.route} />

        <main className={styles.container}>
          <Image src={page.imageurl}
                        alt={page.route}
                        width={4896}
                        height={2760}
                        layout="responsive"
          />
          <article className={styles.content} dangerouslySetInnerHTML={{__html: page.content}}></article>
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