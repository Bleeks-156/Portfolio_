import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="w-12 ml-12 mt-5 flex items-center justify-center mt-2">
      <motion.a
        href="/"
        className="w-16 h-16 flex items-center justify-center overflow-hidden"
        whileHover={{
          scale: 1.1,
          rotate: 180
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
          rotate: {
            duration: 1,
            ease: "easeInOut"
          }
        }}
      >
        <Image
          src="/1.ico"
          alt="Bleeks Logo"
          width={64}
          height={64}
          className="object-contain"
          priority
        />
      </motion.a>
    </div>
  );
};

export default Logo;