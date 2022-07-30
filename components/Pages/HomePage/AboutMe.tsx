import {
  Avatar, Grid, Spacer, Text,
} from '@nextui-org/react';

import DelayedFadeIn from '@/components/Shared/DelayedFadeIn';

const AboutMe = () => (
  <>
    <Grid.Container>
      <Grid xs={12}>
        <DelayedFadeIn>
          <Avatar src="/ProPic.png" zoomed css={{ size: '80px' }} />
        </DelayedFadeIn>
      </Grid>
      <Spacer />
      <Grid xs={12}>
        <DelayedFadeIn>
          <Text h1 size={30}>Ryel Banfield</Text>
          <Text h2 size={16}>Full Stack Developer focused on the Frontend.</Text>
        </DelayedFadeIn>
      </Grid>
    </Grid.Container>
    <Spacer />
  </>
);

export default AboutMe;
