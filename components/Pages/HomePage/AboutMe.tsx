import { Avatar, Grid, Text } from '@nextui-org/react';

import DelayedFadeIn from '@/components/Shared/DelayedFadeIn';

import ResumeDownload from './ResumeDownload';

const AboutMe = () => {
  const techLogos = ['/JavaScript.png', '/TypeScript.png'];

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
          <Text h2 size={19}>Focused on Frontend</Text>
          <Text small size={16}>JavaScript, TypeScript, React & React Native</Text>
        </DelayedFadeIn>
      </Grid>
      <Grid xs={6}>
        <DelayedFadeIn>
          <ResumeDownload />
        </DelayedFadeIn>
      </Grid>
      <Grid xs={6}>
        <DelayedFadeIn>
          <Avatar.Group count={2}>
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
