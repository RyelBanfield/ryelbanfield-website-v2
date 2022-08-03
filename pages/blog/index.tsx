import { NextPage } from 'next';
import Head from 'next/head';

import { Text } from '@nextui-org/react';

// import articles from '../../data/posts';

const Blog: NextPage = () => (
  <>
    <Head>
      <title>Blog - Ryel Banfield</title>
      <meta name="description" content="Ryel Banfield's Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Text h1 color="#fff">Blog</Text>
    {/* {articles.map((article) => (
      <Text key={article.slug}>{article.title}</Text>
    ))} */}

    <Text>Coming soon...</Text>
  </>
);

export default Blog;
