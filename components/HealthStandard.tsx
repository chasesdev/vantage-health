'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HealthStandard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="health-standard" className="py-20 md:py-32 brutalist-vibe">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-6">
              A New Standard in Preventive Health
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Vantage brings together a collection of high-impact markers that are otherwise
              inaccessible. Gain a comprehensive, data-driven approach to looking after your
              body for decades to come.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Vantage quantifies the high performance lifestyle in a non-clinical setting.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/gym-workout.png"
              alt="Person working out in a gym"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
