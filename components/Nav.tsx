import { useRouter } from 'next/router';

import { Button, Grid, Text } from '@nextui-org/react';

const Nav = () => {
  const router = useRouter();

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={4} justify="center">
        <Button onClick={() => router.push('/')}>
          <Text>Home</Text>
        </Button>
      </Grid>
      <Grid xs={4} justify="center">
        <Button onClick={() => router.push('/')}>
          <Text>Work</Text>
        </Button>
      </Grid>
      <Grid xs={4} justify="center">
        <Button onClick={() => router.push('/')}>
          <Text>Posts</Text>
        </Button>
      </Grid>
    </Grid.Container>
  );
};

export default Nav;
