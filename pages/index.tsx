import Navigation from 'components/Navigation';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Ryel Banfield - Developer, Entrepreneur, Digital Nomad.</title>
      <meta name="description" content="Ryel Banfield's Website & Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="h-screen snap-y snap-mandatory overflow-auto">
      <div className="flex h-screen snap-start flex-col">
        <Navigation />
        <div className="grow">
          <div className="m-6 flex rounded-md bg-neutral-100 p-6 xs:m-8">
            <div className="flex w-2/3 items-center">
              <h1 className="text-xl font-bold text-neutral-900">
                Hey, I&apos;m Ryel.
              </h1>
            </div>
            <div className="w-1/3">
              <Image
                src="/Memoji-1.png"
                alt="Ryel Banfield"
                layout="responsive"
                width="100"
                height="100"
              />
            </div>
          </div>

          <div className="m-6 grow xs:m-8">
            <p className="text-xl font-medium">
              I&apos;m a developer, entrepreneur, and digital nomad currently
              working fully remotely from the Caribbean.
            </p>
          </div>
        </div>
      </div>

      <div className="flex h-screen snap-start flex-col">
        <div className="m-6 flex rounded-md bg-neutral-100 p-6 xs:m-8">
          <div className="w-1/3">
            <Image
              src="/Memoji-2.png"
              alt="Ryel Banfield"
              layout="responsive"
              width="100"
              height="100"
            />
          </div>
          <div className="flex w-2/3 items-center justify-end">
            <h1 className="text-right text-xl font-bold text-neutral-900">
              I write code.
            </h1>
          </div>
        </div>

        <div className="m-6 grow xs:m-8">
          <p className="text-xl font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            recusandae iste itaque blanditiis voluptas similique dolorem, omnis
            quisquam, quidem quis quisquam.
          </p>
        </div>
      </div>

      <div className="flex h-screen snap-start flex-col">
        <div className="m-6 flex rounded-md bg-neutral-100 p-6 xs:m-8">
          <div className="flex w-2/3 items-center">
            <h1 className="text-xl font-bold text-neutral-900">Reach out!</h1>
          </div>
          <div className="w-1/3">
            <Image
              src="/Memoji-3.png"
              alt="Ryel Banfield"
              layout="responsive"
              width="100"
              height="100"
            />
          </div>
        </div>

        <div className="m-6 grow xs:m-8">
          <p className="text-xl font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            recusandae iste itaque blanditiis voluptas similique dolorem, omnis
            quisquam, quidem quis quisquam.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Home;
