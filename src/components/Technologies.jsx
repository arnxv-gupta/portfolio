import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandJavascript, TbBrandMongodb, TbBrandNodejs, TbBrandThreejs, TbSql } from 'react-icons/tb';
import { motion } from 'framer-motion';

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24 w-full overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 w-full max-w-full" 
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(5)}
          className="p-6 w-28" 
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="text-white flex justify-center m-2">React</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(5)}
          className="p-6 w-28" 
        >
          <TbBrandThreejs className="text-7xl text-orange-400" />
          <p className="text-white flex justify-center m-2">Three.js</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(5)}
          className="p-6 w-28" 
        >
          <TbBrandMongodb className="text-7xl text-red-400" />
          <p className="text-white flex justify-center m-2">Mongo</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(5)}
          className="p-6 w-28" 
        >
          <TbBrandNodejs className="text-7xl text-green-400" />
          <p className="text-white flex justify-center m-2">Node.js</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(5)}
          className="p-6 w-28" 
        >
          <TbSql className="text-7xl text-sky-400" />
          <p className="text-white flex justify-center m-2">SQL</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(5)}
          className="p-6 w-28" 
        >
          <TbBrandJavascript className="text-7xl text-yellow-400" />
          <p className="text-white flex justify-center m-2">JavaScript</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
