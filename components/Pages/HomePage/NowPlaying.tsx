import confetti from 'canvas-confetti';
import fetcher from 'lib/fetcher';
import { NowPlayingSong } from 'lib/types';
import { BsSpotify } from 'react-icons/bs';
import useSWR from 'swr';

import {
  Card, Col, Row, Text,
} from '@nextui-org/react';

import DelayedFadeIn from '../../Shared/DelayedFadeIn';

const NowPlaying = () => {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  const lightConfetti = () => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
    });
  };

  return (
    <DelayedFadeIn>
      <Card css={{ h: '200px' }} isHoverable isPressable onPress={() => lightConfetti()}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={data?.isPlaying ? data.albumImageUrl : '/Spotify.jpg'}
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Spotify Logo"
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
                What am I listening to?
              </Text>
              <Text size={12} color="#000">
                {data?.isPlaying ? `${data.artist} - ${data.title}` : 'Nothing Playing'}
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
  );
};

export default NowPlaying;
