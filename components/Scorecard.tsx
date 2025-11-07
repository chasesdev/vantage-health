'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const metrics = [
  'Blood Draw (cardiovascular, metabolic, liver, inflammation, dietary)',
  'Body Composition',
  'VO2 Max',
  'Skin Mapping',
  'Retina Scan',
  'Strength',
];

export default function Scorecard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="scorecard" className="brutalist-vibe">
      <div className="grid md:grid-cols-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="p-12 md:p-20 flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-6">
            Your Vantage Scorecard
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Track your data over time, against clinical advisory board recommended ranges,
            and against de-identified members of your cohort. Understand what each marker
            means, why it&apos;s important, and what behavioral interventions can improve it.
          </p>
          <ul className="space-y-4 text-gray-300">
            {metrics.map((metric, index) => (
              <motion.li
                key={metric}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="material-icons text-lg mr-3 mt-1 text-gray-400">
                  check_circle_outline
                </span>
                <span>{metric}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/images/scanner.png"
            alt="Close up of a futuristic medical scanner"
            width={800}
            height={600}
            className="object-cover w-full h-full min-h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
