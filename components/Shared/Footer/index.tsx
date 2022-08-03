import { Grid, Text } from '@nextui-org/react';

import DelayedFadeIn from '../DelayedFadeIn';

const Footer = () => (
  <Grid.Container css={{ minHeight: 60, padding: 30 }} justify="center" alignItems="center">
    <Grid xs={12} justify="center">
      <DelayedFadeIn>
        <Text small>
          {new Date().getFullYear()}
          {' '}
          © Ryel Banfield
        </Text>
      </DelayedFadeIn>
    </Grid>
  </Grid.Container>
);

export default Footer;
