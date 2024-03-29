import { useRouter } from 'next/router';
import { BsFillMarkdownFill } from 'react-icons/bs';

import {
  Button, Card, Col, Row, Text,
} from '@nextui-org/react';

const Blog = () => {
  const router = useRouter();

  return (
    <Card css={{ h: 300 }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Row>
          <Text size={12} weight="bold" transform="uppercase" color="white">Blog Posts</Text>
        </Row>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="/Blog.jpg"
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
              Read more.
            </Text>
          </Row>
          <Row>
            <Text size={12} color="#000" css={{ paddingBottom: 10 }}>
              View now.
            </Text>
          </Row>
          <Button
            size="md"
            flat
            color="error"
            onPress={() => router.push('/blog')}
            iconRight={<BsFillMarkdownFill size={18} />}
            css={{ width: '100%' }}
          >
            <Text
              css={{ color: 'inherit' }}
              size={12}
              weight="bold"
              transform="uppercase"
            >
              Blog
            </Text>
          </Button>
        </Col>
      </Card.Footer>
    </Card>
  );
};

export default Blog;
