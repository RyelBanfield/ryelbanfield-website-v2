/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from 'next/router';
import { IoIosMenu } from 'react-icons/io';

import {
  Button, Card, Container, Modal, Text, useModal,
} from '@nextui-org/react';

const FullScreenModal = () => {
  const { setVisible, bindings } = useModal();
  const router = useRouter();

  return (
    <>
      <Button
        auto
        light
        onPress={() => setVisible(true)}
        icon={<IoIosMenu size={36} />}
      />
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
            Where do you want to go?
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Container xs>
            <Card variant="bordered" isHoverable isPressable onPress={() => router.push('/')}>
              <Card.Body>
                <Text size={16}>
                  Home
                </Text>
              </Card.Body>
            </Card>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FullScreenModal;
