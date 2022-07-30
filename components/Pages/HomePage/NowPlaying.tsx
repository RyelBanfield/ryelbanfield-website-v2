import fetcher from 'lib/fetcher';
import { NowPlayingSong } from 'lib/types';
import { BsSpotify } from 'react-icons/bs';
import useSWR from 'swr';

import {
  Card, Col, Row, Spacer, Text,
} from '@nextui-org/react';

import DelayedFadeIn from '../../Shared/DelayedFadeIn';

const NowPlaying = () => {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <>
      <DelayedFadeIn>
        <Card variant="bordered" css={{ h: 200 }}>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="white">Spotify</Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={data?.isPlaying ? data.albumImageUrl : '/Spotify.jpg'}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Spotify Logo"
              css={{
                draggable: false,
              }}
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
                  Listening to?
                </Text>
                <Text size={12} color="#000">
                  {data?.isPlaying ? `${data.artist} - ${data.title}` : 'Nothing Playing.'}
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <BsSpotify color="#1DB954" size={36} />
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

export default NowPlaying;
