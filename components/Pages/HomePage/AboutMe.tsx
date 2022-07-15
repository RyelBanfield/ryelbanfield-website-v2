import {
  Avatar, Grid, Spacer, Text,
} from '@nextui-org/react';

import DelayedFadeIn from '@/components/Shared/DelayedFadeIn';

const AboutMe = () => {
  const techLogos = [
    '/JavaScript.png',
    '/TypeScript.svg',
  ];

  return (
    <Grid.Container gap={2}>
      <Grid xs={6}>
        <DelayedFadeIn>
          <Text h2 size={19}>Full Stack Developer</Text>
          <Text h2 size={19}> Digital Nomad</Text>
        </DelayedFadeIn>
      </Grid>
      <Grid xs={6}>
        <DelayedFadeIn>
          <Text h2 size={19}>JavaScript & TypeScript</Text>
          <Text h2 size={19}>React, React Native & Next.js</Text>
          <Text h2 size={19}>Node.js & MongoDB</Text>
          <Spacer y={1} />
          <Avatar.Group count={5}>
            {techLogos.map((logo) => (
              <Avatar key={logo} src={logo} bordered />
            ))}
          </Avatar.Group>
        </DelayedFadeIn>
      </Grid>
    </Grid.Container>
  );
};

export default AboutMe;
