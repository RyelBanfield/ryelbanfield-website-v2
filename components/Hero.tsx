import { Grid, Text } from '@nextui-org/react';

const Profile = () => (
  <Grid.Container>
    <Grid xs={12}>
      <Text
        h1
        size={46}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        weight="bold"
      >
        Making
      </Text>
    </Grid>
    <Grid xs={12}>
      <Text
        h1
        size={46}
        css={{
          textGradient: '45deg, $purple600 -20%, $pink600 100%',
        }}
        weight="bold"
      >
        An impact
      </Text>
    </Grid>
    <Grid xs={12}>
      <Text
        h1
        size={46}
        css={{
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
        }}
        weight="bold"
      >
        One line at a time
      </Text>
    </Grid>
  </Grid.Container>
);

export default Profile;
