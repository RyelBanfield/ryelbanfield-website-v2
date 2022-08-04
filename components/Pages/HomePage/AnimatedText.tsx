/* eslint-disable react/jsx-props-no-spreading */
import { motion } from 'framer-motion';

import { Grid, Spacer, Text } from '@nextui-org/react';

const AnimatedText = () => {
  const variants = {
    firstLine: {
      hidden: {
        opacity: 0,
        x: -100,
      },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.75,
        },
      },
    },
    secondLine: {
      hidden: {
        opacity: 0,
        x: 100,
      },
      show: {
        opacity: 1,
        x: 5,
        transition: {
          duration: 0.75,
        },
      },
    },
    thirdLine: {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          delay: 0.75,
          duration: 0.75,
        },
      },
    },
  };

  const props = {
    initial: 'hidden',
    animate: 'show',
  };

  return (
    <>
      <Grid.Container>
        <Grid>
          <motion.div variants={variants.firstLine} {...props}>
            <Text h3 size={27} css={{ textGradient: '45deg, $purple600 10%, $pink600 90%' }}>
              Making
            </Text>
          </motion.div>
        </Grid>
        <Grid>
          <motion.div variants={variants.secondLine} {...props}>
            <Text h3 size={27} css={{ textGradient: '45deg, $pink600 10%, $red500 100%' }}>
              an impact
            </Text>
          </motion.div>
        </Grid>
        <Grid xs={12}>
          <motion.div variants={variants.thirdLine} {...props}>
            <Text h3 size={27} css={{ textGradient: '45deg, $pink500 -20%, $purple600 100%' }}>
              One line at a time
            </Text>
          </motion.div>
        </Grid>
      </Grid.Container>
      <Spacer />
    </>
  );
};

export default AnimatedText;
