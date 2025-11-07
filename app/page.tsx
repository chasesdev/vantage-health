import { Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HealthStandard from '@/components/HealthStandard';
import Experience from '@/components/Experience';
import Scorecard from '@/components/Scorecard';
import Research from '@/components/Research';
import Footer from '@/components/Footer';

// Loading component for sections
function SectionLoader() {
  return (
    <div className="py-20 md:py-32 flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HealthStandard />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Scorecard />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Research />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
