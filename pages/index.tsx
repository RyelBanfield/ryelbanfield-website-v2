import Navigation from 'components/Navigation';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Ryel Banfield - Developer, Entrepreneur, Digital Nomad.</title>
      <meta name="description" content="Ryel Banfield's Website & Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navigation />
  </>
);

export default Home;
