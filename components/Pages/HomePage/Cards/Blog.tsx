import { useRouter } from 'next/router';

import {
  Button, Card, Col, Row, Spacer, Text,
} from '@nextui-org/react';

import DelayedFadeIn from '@/components/Shared/DelayedFadeIn';

const Resume = () => {
  const router = useRouter();

  return (
    <>
      <DelayedFadeIn>
        <Card variant="bordered" css={{ h: 200 }}>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="white">Blog</Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="/Blog.jpg"
              width="100%"
              height="100%"
              objectFit="cover"
              alt="TypeWriter"
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
                  Read more.
                </Text>
                <Text size={12} color="#000">
                  View now.
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded color="error" onPress={() => router.push('/blog')}>
                    <Text
                      css={{ color: 'inherit' }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Blog
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