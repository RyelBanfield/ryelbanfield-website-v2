import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

import { Button, Text } from '@nextui-org/react';

const ConfettiButton = () => {
  const lightConfetti = () => {
    confetti({
      particleCount: 369,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });
  };

  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.5 }}>
      <Button
        auto
        light
        animated={false}
        onPress={lightConfetti}
        css={{
          padding: 0,
        }}
      >
        <Text size={18}>🎉</Text>
      </Button>
    </motion.div>
  );
};

export default ConfettiButton;
