import { motion } from 'framer-motion';

import { Grid, Text } from '@nextui-org/react';

const Profile = () => {
  const firstLine = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,

      },
    },
  };

  const secondLine = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,

      },
    },
  };

  const thirdLine = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 2,
      },
    },
  };

  return (
    <Grid.Container>
      <Grid xs={12}>
        <motion.div
          variants={firstLine}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.2 }}
        >
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
        </motion.div>
      </Grid>
      <Grid xs={12}>
        <motion.div
          variants={secondLine}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.2 }}
        >
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
        </motion.div>
      </Grid>
      <Grid xs={12}>
        <motion.div
          variants={thirdLine}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.2 }}
        >
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
        </motion.div>
      </Grid>
    </Grid.Container>
  );
};

export default Profile;
