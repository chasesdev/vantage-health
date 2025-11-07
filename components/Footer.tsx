'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="brutalist-vibe py-12"
    >
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="mb-4">
          <Image
            src="/logo.svg"
            alt="Vantage Logo"
            width={32}
            height={32}
            className="h-8 w-auto filter mx-auto"
          />
        </div>
        <p className="text-xs">© 2025 Vantage. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
}
