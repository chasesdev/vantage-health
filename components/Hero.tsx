'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-4">
          Optimize Yourself.
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto">
          Vantage gives you a fully body scan that lets you benchmark the key markers of
          healthspan and vitality against real target ranges and real people.
        </p>
      </motion.div>
    </section>
  );
}
