import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes, FaPhone, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePhone = () => {
    setShowPhone(!showPhone); 
  };

  return (
    <nav className='bg-transparent text-white'>
      <div className='container mx-auto flex items-center justify-between py-4 px-6 lg:px-12'>
        <div className='flex-shrink-0'>
          <a href="/" aria-label="Home" className='text-4xl font-bold tracking-wide'>
            Arnav Gupta
          </a>
        </div>

        <div className='lg:hidden'>
          <button
            onClick={toggleMenu}
            aria-label='Toggle Menu'
            className='text-white text-3xl focus:outline-none'
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className='hidden lg:flex items-center gap-4 ml-auto'>
          <a
            href="https://linkedin.com/in/arnav1589/"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='p-2 bg-gray-200 text-2xl text-black rounded-full hover:bg-black hover:text-white transition duration-300'
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/arnxv-gupta"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github'
            className='p-2 bg-gray-200 text-2xl text-black rounded-full hover:bg-black hover:text-white transition duration-300'
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/arnxv.guptaa"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
            className='p-2 bg-gray-200 text-2xl text-black rounded-full hover:bg-black hover:text-white transition duration-300'
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/arnxv_gupta"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
            className='p-2 bg-gray-200 text-2xl text-black rounded-full hover:bg-black hover:text-white transition duration-300'
          >
            <FaTwitter />
          </a>
          <button
            onClick={togglePhone}
            aria-label='Phone'
            className='p-2 bg-gray-200 text-2xl text-black rounded-full hover:bg-black hover:text-white transition duration-300 focus:outline-none'
          >
            <FaPhone />
          </button>
          {showPhone && (
            <span className='ml-2 text-lg font-bold'>
              +91 8219812863
            </span>
          )}
        </div>
      </div>

      
      {isOpen && (
        <div className='lg:hidden bg-transparent'>
          <div className='flex justify-end px-6 py-4 space-x-4'>
            <a
              href="https://linkedin.com/in/arnav1589/"
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='p-2 bg-gray-200 text-xl text-black rounded-full hover:bg-black hover:text-white transition duration-300'
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/arnxv-gupta"
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Github'
              className='p-2 bg-gray-200 text-xl text-black rounded-full hover:bg-black hover:text-white transition duration-300'
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/arnxv.guptaa"
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='p-2 bg-gray-200 text-xl text-black rounded-full hover:bg-black hover:text-white transition duration-300'
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/arnxv_gupta__"
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
              className='p-2 bg-gray-200 text-xl text-black rounded-full hover:bg-black hover:text-white transition duration-300'
            >
              <FaTwitter />
            </a>
            <button
              onClick={togglePhone}
              aria-label='Phone'
              className='p-2 bg-gray-200 text-xl text-black rounded-full hover:bg-black hover:text-white transition duration-300 focus:outline-none'
            >
              <FaPhone />
            </button>
            {showPhone && (
              <span className='ml-2 text-lg font-bold'>
                +91 8219812863
              </span>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
