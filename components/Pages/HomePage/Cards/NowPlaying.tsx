import fetcher from 'lib/fetcher';
import { NowPlayingSong } from 'lib/types';
import useSWR from 'swr';

import {
  Card, Col, Loading, Row, Spacer, Text,
} from '@nextui-org/react';

import DelayedFadeIn from '../../../Shared/DelayedFadeIn';
import TopTracksModal from './TopTracksModal';

const NowPlaying = () => {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <>
      <DelayedFadeIn>
        <Card isHoverable variant="bordered" css={{ h: 300 }}>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Row css={{ alignItems: 'center' }}>
              <Text size={12} weight="bold" transform="uppercase" color="white">
                My Spotify
              </Text>
            </Row>
            {data?.isPlaying && (
              <Loading type="points" color="success" size="sm" />
            )}
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={data?.isPlaying ? data.albumImageUrl : '/NowPlaying.jpg'}
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
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#000">
                See what I&apos;m listening to.
              </Text>
              <Text size={12} color="#000" css={{ paddingBottom: 10 }}>
                {data?.isPlaying ? `${data.artist} - ${data.title}` : 'Nothing Playing.'}
              </Text>
              <TopTracksModal />
            </Col>
          </Card.Footer>
        </Card>
      </DelayedFadeIn>
      <Spacer />
    </>
  );
};

export default NowPlaying;
