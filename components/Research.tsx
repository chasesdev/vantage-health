'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-4">
            Research
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Help us test our cutting edge technologies and join our research program
            beginning Feb 2026.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
