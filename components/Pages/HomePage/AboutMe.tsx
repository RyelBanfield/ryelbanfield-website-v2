import {
  Avatar, Col, Grid, Spacer, Text,
} from '@nextui-org/react';

const AboutMe = () => (
  <>
    <Grid.Container>
      <Grid xs={12}>
        <Avatar src="/ProPic.png" zoomed css={{ size: '80px' }} />
      </Grid>
      <Spacer />
      <Grid xs={12}>
        <Col>
          <Text h1 size={30} color="#fff">Ryel Banfield</Text>
          <Text h2 size={16}>Full Stack Developer focused on the Frontend.</Text>
        </Col>
      </Grid>
    </Grid.Container>
    <Spacer />
  </>
);

export default AboutMe;
