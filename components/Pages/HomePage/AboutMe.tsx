import { Collapse, Text } from '@nextui-org/react';

const AboutMe = () => (
  <Collapse.Group>
    <Collapse title="Who Am I?" expanded>
      <Text size={18}>
        I am a software developer, entrepreneur, and digital nomad.
        I started my first failed business at 18 and after a couple more of those,
        I dedicated myself to learning how to code.
      </Text>
    </Collapse>
    <Collapse title="What Tech Do I Work With?">
      <Text size={18}>
        While capable of working with a wide variety of both Frontend and Backend technologies,
        I primarily work with TypeScript, Next.js and TailwindCSS.
      </Text>
    </Collapse>
    <Collapse title="What Is My Mission?">
      <Text size={18}>
        Currently, I am dedicated to sharpening my skills and learning new technologies,
        enabling me to work with the best of the best,
        and to build applications that have an impact on the world,
        all while traveling and experiencing what that world has to offer.
      </Text>
    </Collapse>
  </Collapse.Group>
);

export default AboutMe;
