import React from 'react';
import Link from 'next/link';

import { Grid, Spacer } from '@nextui-org/react';

const Nav = () => (
  <Grid.Container>
    <Grid xs={12} justify="space-around">
      <Link href="/">Home</Link>
      <Spacer x={1} />
      <Link href="/">Work</Link>
      <Spacer x={1} />
      <Link href="/">Posts</Link>
    </Grid>
  </Grid.Container>
);

export default Nav;
