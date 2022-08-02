/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { Button, Row, Text } from '@nextui-org/react';

const NavLinks = () => {
  const router = useRouter();

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

  return (
    <Row>
      {pages.map((page, index) => (
        <motion.div key={page.href} whileHover={{ scale: 1.2 }}>
          <NextLink href={page.href}>
            <Button
              auto
              light
              animated={false}
              css={{
                padding: 0,
              }}
            >
              <Text
                size={18}
                weight="bold"
                css={{
                  padding: index === 0 ? '0 1rem 0 0' : '0 1rem 0 1rem',
                  color: router.pathname === page.href ? '#999' : '#666',
                  textDecoration: router.pathname === page.href ? 'underline' : 'none',
                }}
              >
                {page.title}
              </Text>
            </Button>
          </NextLink>
        </motion.div>
      ))}
    </Row>
  );
};

export default NavLinks;
