import fetcher from 'lib/fetcher';
import { NowPlayingSong } from 'lib/types';
import { BsSpotify } from 'react-icons/bs';
import useSWR from 'swr';

import { Card, Col, Text } from '@nextui-org/react';

import DelayedFadeIn from './Shared/DelayedFadeIn';

const NowPlaying = () => {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <DelayedFadeIn>
      <Card css={{ h: '200px' }} isHoverable isPressable>
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col>
            <BsSpotify color="#1ed760" />
            {' '}
            <Text size={12} weight="bold" transform="uppercase">
              What am I listening to?
            </Text>
            <Text h3 color="white">
              {data?.isPlaying ? data.artist : 'Nothing Playing'}
            </Text>
            <Text h3 color="white">
              {data?.isPlaying ? data.title : ''}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={data?.isPlaying ? data.albumImageUrl : '/Spotify.jpg'}
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Spotify Logo"
          />
        </Card.Body>
      </Card>
    </DelayedFadeIn>
  );
};

export default NowPlaying;
