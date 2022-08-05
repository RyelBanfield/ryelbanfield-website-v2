import { Grid } from '@nextui-org/react';

import Blog from './Cards/Blog';
import GitHub from './Cards/GitHub';
import NowPlaying from './Cards/NowPlaying';
import Resume from './Cards/Resume';

const Cards = () => (
  <Grid.Container gap={2} css={{ padding: 0 }}>
    <Grid css={{ width: '100%', '@xs': { width: '50%' } }}>
      <Resume />
    </Grid>
    <Grid css={{ width: '100%', '@xs': { width: '50%' } }}>
      <Blog />
    </Grid>
    <Grid css={{ width: '100%', '@xs': { width: '50%' } }}>
      <GitHub />
    </Grid>
    <Grid css={{ width: '100%', '@xs': { width: '50%' } }}>
      <NowPlaying />
    </Grid>
  </Grid.Container>
);

export default Cards;
