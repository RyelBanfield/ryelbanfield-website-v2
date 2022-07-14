import { motion } from 'framer-motion';

import { Card, Text } from '@nextui-org/react';

const AboutMe = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 3, duration: 1 }}
  >
    <Card isHoverable variant="bordered">
      <Card.Header>
        <Text h2 size={24}>Who am I?</Text>
      </Card.Header>
      <Card.Body>
        <Text size={18}>
          I&apos;m a Full Stack Developer living as a Digital Nomad and
          I enjoy building high impact, user-friendly applications.
          While I am capable of working with a wide range of technologies,
          I am most comfortable with
          <Text size={18} small b css={{ textGradient: '45deg, $blue600 -20%, $pink600 50%' }}>
            {' '}
            React
            {' '}
          </Text>
          while using
          <Text size={18} small b css={{ textGradient: '45deg, $purple600 -20%, $pink600 100%' }}>
            {' '}
            Next.js
            {' '}
          </Text>
          &
          <Text size={18} small b css={{ textGradient: '45deg, $yellow600 -20%, $red600 100%' }}>
            {' '}
            TypeScript
          </Text>
          .
        </Text>
      </Card.Body>
    </Card>
  </motion.div>
);

export default AboutMe;
