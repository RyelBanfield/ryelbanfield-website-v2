import confetti from 'canvas-confetti';
import { saveAs } from 'file-saver';

import {
  Button, Card, Col, Grid, Row, Text,
} from '@nextui-org/react';

import DelayedFadeIn from '@/components/Shared/DelayedFadeIn';

const ResumeParty = () => {
  const lightConfetti = () => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
    });
  };

  const handleDownload = () => {
    saveAs(
      '/RyelBanfield-Resume.pdf',
      'RyelBanfield-Resume.pdf',
    );
  };

  return (
    <DelayedFadeIn>
      <Card css={{ h: '400px' }} isHoverable isPressable onPress={() => lightConfetti()}>
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="white">
              Resume
            </Text>
            <Text h3 color="white">
              Download Here
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src="/CardImage.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: 'absolute',
            bgBlur: '#ffffff66',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Text color="#000" size={12}>
                Learn more about me.
              </Text>
              <Text color="#000" size={12}>
                Download now.
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button flat auto rounded color="secondary" onPress={() => handleDownload()}>
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Resume
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </DelayedFadeIn>

  );
};

export default ResumeParty;
