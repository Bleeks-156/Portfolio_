import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo'; // Ensure the path is correct
// import { TwitterIcon, GitHubIcon, LinkedInIcon } from './Icons'; // Commented out since icon links are not currently needed
// import { motion } from 'framer-motion'; // Commented out since it's only used for icon-based social links

// CustomLink Component
const CustomLink = ({ href, title, className = "", newTab = false }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link
      href={href}
      className={`${className} relative group`}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : ""}
    >
      {title}
      <span
        className={`h-[1px] inline-block ${
          isActive ? "w-full" : "w-0"
        } bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

// MobileMenu Component
const MobileMenu = ({ isOpen, toggleMenu }) => {
  const router = useRouter();
  
  return (
    <div className={`fixed top-0 left-0 w-full h-screen bg-light z-50 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out flex flex-col items-center justify-center`}>
      <button 
        onClick={toggleMenu} 
        className="absolute top-6 right-6 text-xl font-bold"
      >
        ✕
      </button>
      
      <nav className="flex flex-col items-center space-y-6 mb-12">
        <Link href="/" className={`text-xl font-medium ${router.pathname === '/' ? 'text-primary' : 'text-dark'}`} onClick={toggleMenu}>Home</Link>
        <Link href="/about" className={`text-xl font-medium ${router.pathname === '/about' ? 'text-primary' : 'text-dark'}`} onClick={toggleMenu}>About</Link>
        <Link href="/projects" className={`text-xl font-medium ${router.pathname === '/projects' ? 'text-primary' : 'text-dark'}`} onClick={toggleMenu}>Projects</Link>
        <Link href="/achievements" className={`text-xl font-medium ${router.pathname === '/achievements' ? 'text-primary' : 'text-dark'}`} onClick={toggleMenu}>Certifications</Link>
      </nav>
      
      <nav className="flex items-center justify-center space-x-8">
        <Link href="mailto:harihrk28@gmail.com" className="text-dark hover:text-primary" onClick={toggleMenu}>Mail</Link>
        <Link href="https://github.com/Bleeks-156" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary" onClick={toggleMenu}>GitHub</Link>
        <Link href="https://twitter.com/J_u_s_t_bleeks" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary" onClick={toggleMenu}>Twitter</Link>
        <Link href="https://www.linkedin.com/in/hari-shankar-babu-m-b82b67262" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary" onClick={toggleMenu}>LinkedIn</Link>
      </nav>
    </div>
  );
};

// NavBar Component
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-6 sm:py-8 lg:py-12 font-medium flex items-center justify-between relative">
      {/* Mobile Menu Button - Only visible on small screens */}
      <button 
        className="flex md:hidden flex-col justify-center items-center z-50"
        onClick={toggleMenu}
      >
        <span className="block w-6 h-0.5 bg-dark mb-1.5"></span>
        <span className="block w-6 h-0.5 bg-dark mb-1.5"></span>
        <span className="block w-6 h-0.5 bg-dark"></span>
      </button>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      {/* Desktop Navigation Links - Hidden on small screens */}
      <nav className="hidden md:flex">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/achievements" title="Certifications" className="ml-4" />
      </nav>

      {/* Text-Based Social Media Links - Hidden on small screens */}
      <nav className="hidden md:flex items-center justify-center space-x-6">
        <CustomLink
          href="mailto:harihrk28@gmail.com"
          title="Mail"
          className="text-dark hover:text-primary"
        />
        <CustomLink
          href="https://github.com/Bleeks-156"
          title="GitHub"
          className="text-dark hover:text-primary"
          newTab={true}
        />
        <CustomLink
          href="https://twitter.com/J_u_s_t_bleeks"
          title="Twitter"
          className="text-dark hover:text-primary"
          newTab={true}
        />
        <CustomLink
          href="https://www.linkedin.com/in/hari-shankar-babu-m-b82b67262"
          title="LinkedIn"
          className="text-dark hover:text-primary"
          newTab={true}
        />
      </nav>

      {/* Centered Logo */}
      <div className="absolute left-1/2 top-2 transform -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;