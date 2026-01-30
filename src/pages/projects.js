import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Head from 'next/head';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

// Import project images
// import aiNftProject from "../../public/images/projects/AI-Project.png";
// import webDevProject from "../../public/images/projects/crypto-screener-cover-image.jpg";
import PlayHaven from "../../public/images/projects/PlayHaven.png"
import mobileAppProject from "../../public/images/projects/devdreaming.jpg";
import dataAnalyticsProject from "../../public/images/projects/Star-Taxi.png";
import HBS from "../../public/images/projects/HBS.png";

// FeaturedProject Component with animation
const FeaturedProject = ({ title, summary, img, link, github, tech }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  
  return (
    <article 
      ref={ref}
      className={`relative w-full flex flex-col items-center justify-between rounded-2xl border-2 border-solid border-black bg-light p-6 sm:p-8 md:p-10 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ minHeight: '300px' }} // Add fixed minimum height
    >
      <div className='absolute top-0 -right-3 -z-10 w-full h-full rounded-2xl bg-blue' />
      
      <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
        <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '16/9' }}>
          <Image 
            src={img} 
            alt={title} 
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
            priority
            layout="responsive"
            width={1600}
            height={900}
          />
        </div>
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-sm sm:text-base'>{tech}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-xl sm:text-2xl md:text-3xl font-bold text-dark'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-sm sm:text-base text-dark'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href="https://github.com/Bleeks-156/Star-Taxi" target="_blank" className='rounded-lg bg-dark text-light px-4 py-2 text-sm sm:text-base font-semibold hover:bg-light hover:text-dark border-2 border-solid border-dark transition-colors duration-300'>
            Visit GitHub
          </Link>
          {/* <Link href={link} target="_blank" className='ml-4 rounded-lg bg-light text-dark px-4 py-2 text-sm sm:text-base font-semibold hover:bg-dark hover:text-light border-2 border-solid border-dark transition-colors duration-300'>
            Visit Project
          </Link> */}
        </div>
      </div>
    </article>
  );
};

// Project Component for smaller project cards
const Project = ({ title, tech, img, link, github }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  
  return (
    <article 
      ref={ref}
      className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-solid border-black bg-light p-4 sm:p-6 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ minHeight: '240px' }} // Add fixed minimum height
    >
      <div className='absolute top-0 -right-3 -z-10 w-full h-full rounded-2xl bg-blue' />
      
      <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
        <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '16/9' }}>
          <Image 
            src={img} 
            alt={title} 
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
            layout="responsive"
            width={1600}
            height={900}
          />
        </div>
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-3'>
        <span className='text-primary font-medium text-xs sm:text-sm'>{tech}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-1 w-full text-left text-lg sm:text-xl font-bold text-dark'>{title}</h2>
        </Link>
        <div className='mt-2 w-full flex justify-between items-center'>
          <Link href={github} target="_blank" className='text-sm font-semibold underline underline-offset-2 text-dark'>
            Code
          </Link>
          <Link href={link} target="_blank" className='rounded-lg bg-dark text-light px-3 py-1.5 text-xs sm:text-sm font-semibold hover:bg-light hover:text-dark border-2 border-solid border-dark transition-colors duration-300'>
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

// Custom project detail section for AI NFT project
const AIProjectFeature = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 sm:py-12 bg-light rounded-2xl border-2 border-solid border-black overflow-hidden relative mb-12">
      <div className='absolute top-0 -right-3 -z-10 w-full h-full rounded-2xl bg-blue' />
      
      <div className="bg-indigo-900 w-full py-10 px-4 mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-light mb-4">
          AI-Generated Content With NFT
        </h2>
        <p className="text-light text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Generate unique AI-powered content for NFTs, including stories, code, images,
          articles, and poems. Elevate your NFT creations with AI!
        </p>
        <button className="mt-6 bg-orange-400 hover:bg-orange-500 transition-colors duration-300 text-white font-bold py-2 px-6 rounded-lg">
          Start Creating
        </button>
      </div>
      
      <div className="w-full px-4 sm:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-dark">Our AI Tools</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {[
            { icon: "📝", title: "AI Story Writer", desc: "Create compelling NFT storylines." },
            { icon: "📊", title: "AI Code Generator", desc: "Generate smart contract code for blockchain integration." },
            { icon: "🎨", title: "AI Image Generator", desc: "Generate NFT artwork effortlessly." },
            { icon: "📰", title: "AI Article Creator", desc: "Generate unique NFT-related articles." },
            { icon: "✍️", title: "AI Poem Generator", desc: "Create poetic NFT descriptions." }
          ].map((tool, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center" style={{ minHeight: '140px' }}>
              <span className="text-xl mb-2 block">{tool.icon}</span>
              <h4 className="font-bold text-dark mb-2">{tool.title}</h4>
              <p className="text-sm text-gray-600">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full bg-light pt-10 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4 text-dark">React / Tailwind CSS / Solidity / Ether.js / IPFS / Foundry-Framework / MetaMask / ERC-721 / Ethereum / Sepolia</h3>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-dark">AI-Generated Content With NFT</h2>
              <p className="text-dark mb-6">
                A revolutionary platform that combines AI-generated art with blockchain technology. Users can create unique digital art
                using machine learning algorithms and mint them as NFTs on the Ethereum blockchain. The project includes smart contract
                integration, user authentication, and a marketplace for buying and selling digital assets.
              </p>
              <div className="flex gap-4">
                <Link href="https://github.com/Bleeks-156/AI-Content-Generator-NFT" target="_blank" className='rounded-lg bg-dark text-light px-4 py-2 text-sm sm:text-base font-semibold hover:bg-light hover:text-dark border-2 border-solid border-dark transition-colors duration-300'>
                  Visit GitHub
                </Link>
                {/* <Link href="https://ai-nft-project.com" target="_blank" className='rounded-lg bg-light text-dark px-4 py-2 text-sm sm:text-base font-semibold hover:bg-dark hover:text-light border-2 border-solid border-dark transition-colors duration-300'>
                  Visit Project
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Hari&apos;s | Projects</title>
        <meta name="description" content="Hari Shankar's portfolio showcasing web development and software engineering projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-4 sm:pt-6 md:pt-8 w-full px-4 sm:px-6 md:px-12 lg:px-24'>
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className='mb-8 sm:mb-12 md:mb-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center w-full'
          />
          
          {/* AI NFT Project Feature */}
          <AIProjectFeature />
          
          {/* Other Projects */}
          <div className='grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12'>
            <div className='md:col-span-6'>
              <Project 
                title="Custom Landing Page"
                tech="Vite+ React.js / Tailwind CSS "
                img={HBS}
                link="https://whimsical-creponne-6f9f80.netlify.app/"
                github="https://github.com/Bleeks-156/HBS-Landing-Page"
              />
            </div>
            <div className='md:col-span-6'>
              <Project 
                title="PlayHaven- Video Streaming Platform"
                tech="React.js/ Node.js / Express.js / MongoDB / Stripe / GooglePay / Socket.IO / Tailwind CSS"
                img={PlayHaven}
                link="https://playhaven-infa.onrender.com/login"
                github="https://github.com/AjayPeter582/Playhaven"
              />
            </div>
            <div className='md:col-span-12'>
              <FeaturedProject 
                title="Star-Taxi Game"
                summary="A futuristic space taxi survival game built with Unity. Players control a taxi, navigating through a road in space, dodging obstacles and achieving high scores."
                img={dataAnalyticsProject}
                link="https://data-analytics-tool.com"
                github="https://github.com/harishankar/data-analytics"
                tech="Unity / C# "
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
