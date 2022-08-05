import type { NextPage } from 'next';
import Head from 'next/head';

import AboutMe from '@/components/Pages/HomePage/AboutMe';
import AnimatedText from '@/components/Pages/HomePage/AnimatedText';
import Cards from '@/components/Pages/HomePage/Card';
import Intro from '@/components/Pages/HomePage/Intro';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Ryel Banfield - Developer, Entrepreneur, Digital Nomad.</title>
      <meta name="description" content="Ryel Banfield's Website & Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Intro />
    <AnimatedText />
    <Cards />
    <AboutMe />
  </>
);

export default Home;
