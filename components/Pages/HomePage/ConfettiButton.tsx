import React from 'react';
import confetti from 'canvas-confetti';
import { GiPartyPopper } from 'react-icons/gi';

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
    <Button
      auto
      light
      onClick={() => lightConfetti()}
      icon={<GiPartyPopper size={36} />}
    />
  );
};

export default ConfettiButton;
