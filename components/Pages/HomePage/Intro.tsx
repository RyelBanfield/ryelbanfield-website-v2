import {
  Avatar, Col, Grid, Spacer, Text,
} from '@nextui-org/react';

const Intro = () => (
  <>
    <Grid.Container>
      <Grid xs={12}>
        <Avatar src="/ProPic.png" zoomed css={{ size: '100px' }} />
      </Grid>
      <Spacer />
      <Grid xs={12}>
        <Col>
          <Text h1 size={36}>Ryel Banfield</Text>
          <Text h2 size={18} color="#999">Full Stack Developer focused on the Frontend.</Text>
        </Col>
      </Grid>
    </Grid.Container>
    <Spacer />
  </>
);

export default Intro;
