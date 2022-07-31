import { saveAs } from 'file-saver';
import { HiOutlineDocumentText } from 'react-icons/hi';

import {
  Button, Card, Col, Row, Spacer, Text,
} from '@nextui-org/react';

import DelayedFadeIn from '@/components/Shared/DelayedFadeIn';

const Resume = () => {
  const handleDownload = () => {
    saveAs(
      '/RyelBanfield-Resume.pdf',
      'RyelBanfield-Resume.pdf',
    );
  };

  return (
    <>
      <DelayedFadeIn>
        <Card isHoverable variant="bordered" css={{ h: 200 }}>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="white">Updated Resume</Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="/Resume.jpg"
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Macbook Pro with code"
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
                <Text size={12} weight="bold" transform="uppercase" color="#000">
                  Learn more.
                </Text>
                <Text size={12} color="#000">
                  Download now.
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button
                    size="md"
                    flat
                    color="secondary"
                    onPress={() => handleDownload()}
                    iconRight={<HiOutlineDocumentText size={18} />}
                  >
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
      <Spacer />
    </>
  );
};

export default Resume;
