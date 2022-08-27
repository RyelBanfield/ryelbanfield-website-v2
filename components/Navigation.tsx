/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navigation = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <nav className="flex justify-end">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setMobileMenuActive(!mobileMenuActive)}
        className={`${mobileMenuActive ? 'hidden' : 'block p-6'}`}
      >
        <GiHamburgerMenu size={24} />
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setMobileMenuActive(!mobileMenuActive)}
        className={`${mobileMenuActive ? 'z-50 block p-6' : 'hidden'}`}
      >
        <CgClose size={24} />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${
          mobileMenuActive
            ? 'absolute flex h-screen w-screen justify-end bg-neutral-900'
            : 'hidden'
        }`}
      >
        <div className="flex">
          <ul className="flex flex-col items-end justify-center p-6">
            <li className="py-3">
              <Link href="/">
                <a className="text-2xl">Home</a>
              </Link>
            </li>
            <li className="py-3">
              <Link href="/blog">
                <a className="text-2xl">Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
