import React from 'react';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';
import mypic from '../assets/mypic.jpg';

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Hero = () => {
  return (
    <div className="pb-10 pt-16 lg:pt-24 lg:pb-32 w-full max-w-full overflow-hidden">
    <div className="flex flex-wrap items-center justify-center lg:flex-row-reverse lg:justify-between w-full max-w-full">
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <motion.img
          src={mypic}
          alt="Arnav"
          className="border border-stone-900 rounded-3xl lg:mt-0 mt-8"
          width={400}
          height={350}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-16 max-w-full"
      >
        <div className="flex flex-col items-center lg:items-start">
          <motion.h2
            variants={childVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-4"
          >
            Arnav Gupta
          </motion.h2>
  
          <motion.span 
            variants={childVariants}
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-transparent mb-4"
          >
            Full Stack Developer
          </motion.span>
  
          <motion.p 
            variants={childVariants}
            className="text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight text-white max-w-xl lg:max-w-2xl mb-6"
          >
            {HERO_CONTENT}
          </motion.p>
  
          <motion.a
            variants={childVariants}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-white rounded-full px-6 py-3 text-sm lg:text-base text-stone-800 font-semibold hover:bg-gray-200 transition-all"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  </div>  
  );
}

export default Hero;
