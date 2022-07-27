import type { NextPage } from 'next';
import Head from 'next/head';

import { Container, Spacer } from '@nextui-org/react';

import AboutMe from '@/components/Pages/HomePage/AboutMe';
import Hero from '@/components/Pages/HomePage/Hero';
import ResumeParty from '@/components/Pages/HomePage/ResumeParty';
import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Ryel Banfield - Developer</title>
      <meta name="description" content="Ryel Banfield's Website & Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container>
      <Spacer y={2} />
      <Header />
      <Spacer y={1} />
      <AboutMe />
      <Spacer y={1} />
      <Hero />
      <Spacer y={1} />
      <ResumeParty />
      <Footer />
    </Container>
  </>
);

export default Home;
