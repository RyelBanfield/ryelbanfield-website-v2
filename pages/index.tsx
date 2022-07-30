import type { NextPage } from 'next';
import Head from 'next/head';

import { Container } from '@nextui-org/react';

import AboutMe from '@/components/Pages/HomePage/AboutMe';
import AnimatedText from '@/components/Pages/HomePage/AnimatedText';
import Blog from '@/components/Pages/HomePage/Cards/Blog';
import NowPlaying from '@/components/Pages/HomePage/Cards/NowPlaying';
import Resume from '@/components/Pages/HomePage/Cards/Resume';
import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Ryel Banfield - Developer</title>
      <meta name="description" content="Ryel Banfield's Website & Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container xs>
      <Header />
      <AboutMe />
      <AnimatedText />
      <Resume />
      <Blog />
      <NowPlaying />
      <Footer />
    </Container>
  </>
);

export default Home;
