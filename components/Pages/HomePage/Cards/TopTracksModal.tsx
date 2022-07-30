/* eslint-disable react/jsx-props-no-spreading */
import fetcher from 'lib/fetcher';
import { TopTracks } from 'lib/types';
import { BsSpotify } from 'react-icons/bs';
import useSWR from 'swr';

import {
  Button, Card, Col, Container, Modal, Row, Spacer, Text, useModal,
} from '@nextui-org/react';

const FullScreenModal = () => {
  const { setVisible, bindings } = useModal();
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher);

  return (
    <>
      <Button
        size="md"
        flat
        color="success"
        onPress={() => setVisible(true)}
        iconRight={<BsSpotify size={18} />}
      >
        <Text
          css={{ color: 'inherit' }}
          size={12}
          weight="bold"
          transform="uppercase"
        >
          Top Tracks
        </Text>
      </Button>
      <Modal
        scroll
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
        css={{ borderRadius: '0' }}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            My top tracks on Spotify updated daily.
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Container xs>
            {data?.tracks.map((track, index) => (
              <div key={track.title}>
                <Card isHoverable variant="bordered" css={{ h: 250 }}>
                  <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                    <Col>
                      <Text size={12} weight="bold" transform="uppercase" color="white">
                        #
                        {' '}
                        {index + 1}
                      </Text>
                    </Col>
                  </Card.Header>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={track.albumImageUrl}
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
                          {track.title}
                        </Text>
                        <Text size={12} color="#000">
                          {track.artist}
                        </Text>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
                <Spacer />
              </div>
            ))}
            <Spacer y={2} />
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FullScreenModal;
