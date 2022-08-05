import { AiFillGithub } from 'react-icons/ai';

import {
  Button, Card, Col, Row, Text,
} from '@nextui-org/react';

const GitHub = () => (
  <Card css={{ h: 300 }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Row>
        <Text size={12} weight="bold" transform="uppercase" color="white">GitHub</Text>
      </Row>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="/GitHub.jpg"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="A library of books"
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
            Read My Code.
          </Text>
        </Row>
        <Row>
          <Text size={12} color="#000" css={{ paddingBottom: 10 }}>
            Visit now.
          </Text>
        </Row>
        <Button
          size="md"
          flat
          iconRight={<AiFillGithub size={18} color="#999" />}
          css={{ width: '100%', backgroundColor: '#333' }}
          onClick={() => window.open('https://github.com/RyelBanfield')}
        >
          <Text
            size={12}
            weight="bold"
            transform="uppercase"
          >
            GitHub
          </Text>
        </Button>
      </Col>
    </Card.Footer>
  </Card>
);

export default GitHub;
