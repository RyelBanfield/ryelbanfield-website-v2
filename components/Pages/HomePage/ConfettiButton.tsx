import React from 'react';
import confetti from 'canvas-confetti';

import { Button } from '@nextui-org/react';

const ConfettiButton = () => {
  const lightConfetti = () => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
    });
  };

  return (
    <Button auto ghost color="gradient" onClick={() => lightConfetti()}>Party</Button>
  );
};

export default ConfettiButton;
