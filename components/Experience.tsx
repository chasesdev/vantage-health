'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: 'storefront',
    title: 'A New Look',
    description:
      'Convenient locations, striking design, and the amenities you need to maintain your high performance lifestyle.',
  },
  {
    icon: 'biotech',
    title: 'Comprehensive Scan',
    description:
      'In just 30 minutes, our team guides you through a series of high-impact diagnostics including a blood draw, DEXA scan, VO2 Max, and more.',
  },
  {
    icon: 'insights',
    title: 'Actionable Insights',
    description:
      'Your results populate in our app as the Vantage Scorecard. Track data, understand markers, and receive AI-driven action plans backed by our clinical advisory board to optimize your health.',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-4">
            The Vantage Experience
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-16">
            From our striking studios to our seamless digital platform, every detail is
            designed for your comfort and performance.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-left"
            >
              <span className="material-icons text-4xl mb-4 text-gray-400">
                {feature.icon}
              </span>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
