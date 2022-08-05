import { Grid } from '@nextui-org/react';

import Blog from './Cards/Blog';
import GitHub from './Cards/GitHub';
import NowPlaying from './Cards/NowPlaying';
import Resume from './Cards/Resume';

const Cards = () => (
  <Grid.Container gap={2} css={{ padding: 0 }}>
    <Grid xs={6}>
      <Resume />
    </Grid>
    <Grid xs={6}>
      <Blog />
    </Grid>
    <Grid xs={6}>
      <GitHub />
    </Grid>
    <Grid xs={6}>
      <NowPlaying />
    </Grid>
  </Grid.Container>
);

export default Cards;
