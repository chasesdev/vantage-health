'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#health-standard', label: 'Health Standard' },
  { href: '#research', label: 'Research' },
  { href: '#experience', label: 'Experience' },
  { href: '#scorecard', label: 'Scorecard' },
];

export default function Header() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-10"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <Image
            src="/logo.svg"
            alt="Vantage Logo"
            width={32}
            height={32}
            className="h-8 w-auto filter"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-white text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
