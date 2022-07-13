import type { NextPage } from 'next';
import Head from 'next/head';
import { useTheme as useNextTheme } from 'next-themes';

import {
  Container,
  Grid, Row, Spacer, Switch, Text, useTheme,
} from '@nextui-org/react';

import { MoonIcon, SunIcon } from '../components/SwitchIcons';

const Home: NextPage = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <>
      <Head>
        <title>Ryel Banfield</title>
        <meta name="description" content="Ryel Banfield's Personal Website & Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Grid.Container gap={2}>
          <Grid xs={10}>
            <Text h1>Ryel Banfield</Text>
          </Grid>

          <Grid xs={2}>
            <Row justify="flex-end" align="center">
              <Switch
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                iconOff={<SunIcon filled size={24} height={24} width={24} label="Sun" />}
                iconOn={<MoonIcon filled size={24} height={24} width={24} label="Moon" />}
              />
            </Row>
          </Grid>

          <Grid xs={12}>
            <Text size={24}>Home</Text>
            <Spacer x={1} />
            <Text size={24}>Work</Text>
            <Spacer x={1} />
            <Text size={24}>Posts</Text>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default Home;
