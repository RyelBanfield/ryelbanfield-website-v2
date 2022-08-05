import { saveAs } from 'file-saver';
import { HiOutlineDocumentText } from 'react-icons/hi';

import {
  Button, Card, Col, Row, Text,
} from '@nextui-org/react';

const Resume = () => {
  const handleDownload = () => {
    saveAs(
      '/RyelBanfield-Resume.pdf',
      'RyelBanfield-Resume.pdf',
    );
  };

  return (
    <Card css={{ h: 300 }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Row>
          <Text size={12} weight="bold" transform="uppercase" color="white">Updated Resume</Text>
        </Row>
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
        <Col>
          <Row>
            <Text size={12} weight="bold" transform="uppercase" color="#000">
              Learn more.
            </Text>
          </Row>
          <Row>
            <Text size={12} color="#000" css={{ paddingBottom: 10 }}>
              Download now.
            </Text>
          </Row>
          <Button
            size="md"
            flat
            color="secondary"
            onPress={() => handleDownload()}
            iconRight={<HiOutlineDocumentText size={18} />}
            css={{ width: '100%' }}
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
        </Col>
      </Card.Footer>
    </Card>
  );
};

export default Resume;
