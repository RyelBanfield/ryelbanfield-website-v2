/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import {
  Link, Row, Spacer, Text,
} from '@nextui-org/react';

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
      {pages.map((page) => (
        <>
          <NextLink href={page.href}>
            <Link>
              <Text
                size={16}
                weight="bold"
                color="white"
                css={{
                  textDecoration: router.pathname === page.href ? 'underline' : 'none',
                }}
              >
                {page.title}
              </Text>
            </Link>
          </NextLink>
          <Spacer />
        </>
      ))}
    </Row>
  );
};

export default NavLinks;
