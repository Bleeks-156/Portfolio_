import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Head from 'next/head';
import React, { useEffect, useRef} from 'react';
import profilePic from "../../public/images/profile/me-port2.jpg";
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

// Import skill images
import reactImg from "../../public/images/skills/React.png";
import tailwindImg from "../../public/images/skills/tailwind-css.png";
import javascriptImg from "../../public/images/skills/Javascript.png";
import nodeImg from "../../public/images/skills/node-js.png";
import htmlImg from "../../public/images/skills/html.png";
import cssImg from "../../public/images/skills/css.png";
import javaImg from "../../public/images/skills/java.png";
import cImg from "../../public/images/skills/c.png";
import cppImg from "../../public/images/skills/cpp.png";
import sqlImg from "../../public/images/skills/sql.png";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, {once:true});

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });

    return () => unsubscribe(); // Cleanup function to avoid memory leaks
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Skill = ({ name, imgSrc }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center justify-center transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 border-2 border-solid border-black rounded-full bg-light hover:scale-110 transition-transform duration-300 flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 -right-1 -z-10 w-full h-full rounded-full bg-blue" />
        <div className="w-3/4 h-3/4 relative flex items-center justify-center">
          <Image 
            src={imgSrc} 
            alt={name}
            width={80}
            height={80}
            className="object-contain max-w-full max-h-full"
            style={{ width: 'auto', height: 'auto' }}
            sizes="(max-width: 640px) 40px, (max-width: 768px) 60px, 80px"
          />
        </div>
      </div>
      <h3 className="mt-2 text-sm sm:text-base font-medium">{name}</h3>
    </div>
  );
};

const About = () => {
  const skills = [
    { name: "React", img: reactImg },
    { name: "Tailwind", img: tailwindImg },
    { name: "JavaScript", img: javascriptImg },
    { name: "Node.js", img: nodeImg },
    { name: "HTML", img: htmlImg },
    { name: "CSS", img: cssImg },
    { name: "Java", img: javaImg },
    { name: "C", img: cImg },
    { name: "C++", img: cppImg },
    { name: "SQL", img: sqlImg }
  ];

  return (
    <>
      <Head>
        <title>Hari&apos;s | About Page</title>
        <meta name="description" content="About Hari Shankar Babu - Skills, Biography and Experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-4 sm:pt-6 md:pt-8 w-full px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto'>
          <AnimatedText
            text="Passion Fuels Purpose!"
            className='mb-8 sm:mb-10 md:mb-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center w-full'
          />
          
          <div className='grid w-full grid-cols-1 md:grid-cols-8 gap-6 sm:gap-8 md:gap-10 lg:gap-16'>
            {/* Biography Section */}
            <div className='md:col-span-3 flex flex-col items-start justify-start text-center md:text-left'>
              <h2 className='mb-3 sm:mb-4 text-base sm:text-lg font-bold uppercase text-dark'>Biography</h2>
              <p className='font-medium text-sm sm:text-base'>
                Hello! I&apos;m Hari Shankar, a passionate and detail-oriented developer with a strong background in web development, software engineering, and problem-solving. With experience in React, Tailwind CSS, and Vite, I specialize in creating efficient, user-friendly, and scalable web applications.
              </p>
              <br />
              <p className='font-medium text-sm sm:text-base'>
                Beyond software development, I have a strong interest in engineering ethics, system design, and emerging technologies, which enhance my analytical thinking and problem-solving approach. I am committed to applying innovative solutions, precision-driven development, and ethical considerations to create impactful and user-centric digital experiences.
              </p>
            </div>
            
            {/* Profile Image */}
            <div className='md:col-span-3 relative h-auto max-w-md mx-auto md:mx-0 w-full rounded-2xl border-2 border-solid border-black bg-light p-4 sm:p-6 md:p-8 flex justify-center'>
              <div className='absolute top-0 -right-3 -z-10 w-full h-full rounded-2xl bg-dark' />
              <Image 
                src={profilePic} 
                alt="Hari Shankar" 
                className='w-full h-auto rounded-2xl object-cover'
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 400px"
              />
            </div>
            
            {/* Stats Section */}
            <div className='md:col-span-2 flex flex-col items-center md:items-end justify-between space-y-4 sm:space-y-6 md:space-y-10'>
              <div className='flex flex-col items-center md:items-end justify-center'>
                <span className='inline-block text-4xl sm:text-5xl md:text-6xl font-bold'>
                  <AnimatedNumbers value={7}/>
                </span>  
                <h2 className='text-base sm:text-lg font-medium'>Course Certifications</h2>
              </div>
              <div className='flex flex-col items-center md:items-end justify-center'>
                <span className='inline-block text-4xl sm:text-5xl md:text-6xl font-bold'>
                  <AnimatedNumbers value={4} />
                </span>
                <h2 className='text-base sm:text-lg font-medium'>Projects Completed</h2>
              </div>
              <div className='flex flex-col items-center md:items-end justify-center'>
                <span className='inline-block text-4xl sm:text-5xl md:text-6xl font-bold'>
                  <AnimatedNumbers value={5} />
                </span>
                <h2 className='text-base sm:text-lg font-medium'>Interns Completed</h2>
              </div>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className='mt-12 sm:mt-16 md:mt-24 w-full'>
            <h2 className='mb-8 sm:mb-10 text-2xl sm:text-3xl md:text-4xl font-bold text-center w-full'>
              Skills & Technologies
            </h2>
            
            <div className='relative'>
              {/* Decorative background element */}
              <div className='absolute top-2 left-2 -z-10 w-full h-full rounded-2xl bg-dark' />
              
              <div className='bg-light border-2 border-solid border-black rounded-2xl p-6 sm:p-8 md:p-10'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-10 md:gap-12'>
                  {skills.map((skill, index) => (
                    <Skill 
                      key={index}
                      name={skill.name}
                      imgSrc={skill.img}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
