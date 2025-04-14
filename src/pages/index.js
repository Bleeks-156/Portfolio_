import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/images/profile/profile.png';
import AnimatedText from '@/components/AnimatedText';
// import { LinkArrow } from '@/components/Icons';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android|iphone|ipad|ipod/i.test(userAgent.toLowerCase())) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Hari&apos;s | Home</title>
        <meta
          name="description"
          content="Portfolio of Hari Shankar Babu, a passionate developer."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      {isMobile ? (
        <main className="flex items-center justify-center min-h-screen text-center bg-yellow-100 text-lg px-6">
          <p>
            ⚠️ This site is best viewed in <strong>Desktop Mode</strong>.
            <br />
            Please tap the <strong>three-dot menu</strong> in your browser and select <strong>"Request Desktop Site"</strong>.
          </p>
        </main>
      ) : (
        <main className="flex items-center text-dark w-full min-h-screen">
          <Layout>
            <div className="flex items-center justify-between w-full lg:flex-row flex-col max-w-6xl mx-auto px-4">
              {/* Image Section */}
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-center lg:justify-start">
                <div className="w-full max-w-md">
                  <Image
                    src={profilePic}
                    alt="Hari Shankar Babu"
                    className="w-full h-auto rounded-lg object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 w-full lg:pl-12 flex flex-col items-center lg:items-start self-center">
                <AnimatedText
                  text="Welcome to My Portfolio!"
                  className="!text-5xl lg:!text-left text-center font-bold mb-4"
                />

                <p className="my-4 text-base font-medium leading-relaxed text-center lg:text-left">
                  I&apos;m Hari Shankar Babu, a passionate developer with a deep interest in building dynamic and user-centric web applications. I specialize in crafting innovative solutions that seamlessly integrate the latest technologies, ensuring optimal performance and user experience. With a strong foundation in web development, I also continuously explore emerging technologies to provide revolutionary solutions. My goal is to contribute to the tech community by creating scalable, secure, and impactful applications that drive business growth and improve everyday life.
                </p>

                <div className="flex items-center self-center lg:self-start mt-4">
                  <Link
                    href="https://drive.google.com/file/d/10RH90NmvfQ6pnd9XbBsiZnO8X-iF5x1c/view?usp=drive_link"
                    target="_blank"
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark transition-colors duration-300"
                    download={true}
                  >
                    My Resume
                    {/* <LinkArrow className="w-5 ml-4"/> */}
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
        </main>
      )}
    </>
  );
}
