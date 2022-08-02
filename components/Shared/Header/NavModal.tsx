/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from 'next/router';
import { IoIosMenu } from 'react-icons/io';

import {
  Button, Card, Container, Modal, Spacer, Text, useModal,
} from '@nextui-org/react';

const pages = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
];

const NavModal = () => {
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
            {pages.map((page) => {
              if (page.href !== router.pathname) {
                return (
                  <div key={page.title}>
                    <Card
                      variant="bordered"
                      isHoverable
                      isPressable
                      onPress={() => {
                        router.push(page.href);
                        setVisible(false);
                      }}
                    >
                      <Card.Body>
                        <Text size={16}>
                          {page.title}
                        </Text>
                      </Card.Body>
                    </Card>
                    <Spacer />
                  </div>
                );
              }
              return null;
            })}
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavModal;
