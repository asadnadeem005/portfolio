'use client';
import { heroSection } from '@/lib/content/hero';

import { Button, Wrapper } from '@/components';

import { useEffect, useState } from 'react';

const typewriterWords = ['mobile apps.', 'web experiences.', 'AI interfaces.'];

const Hero = () => {
  const { cta, subtitle, title, description, specialText, badges } = heroSection;

  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = typewriterWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % typewriterWords.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <Wrapper
      id="hero"
      animate={false}
      className="flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0"
    >
      <div className="flex items-center gap-2 w-fit">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="font-mono text-xs text-emerald-400">Available for opportunities</span>
      </div>

      <p className="font-mono text-sm md:text-base text-accent">{subtitle}</p>

      <div className="max-w-5xl text-4xl font-bold tracking-tighter md:text-7xl">
        <h1 className="text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]">
          {title}
        </h1>
        <h1 className="leading-[1.2]">
          I build high-performance
        </h1>
        <h1 className="leading-[1.2] text-accent min-h-[1.2em]">
          {displayed}
          <span className="animate-pulse">|</span>
        </h1>
      </div>

      <p className="max-w-xl text-base md:text-lg">{description}</p>

      <p className="font-mono text-xs md:text-sm text-accent">{specialText}</p>

      {badges && badges.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="font-mono text-xs px-3 py-1.5 rounded-full border border-accent text-accent bg-accent-light"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {cta && (
        <Button
          size="lg"
          type="link"
          href={cta?.url ?? '#'}
          className={`mt-5 xs:mt-8 md:mt-10 ${cta.hideInDesktop ? 'md:hidden' : ''
            }`}
          sameTab={cta?.sameTab}
        >
          {cta.title}
        </Button>
      )}
    </Wrapper>
  );
};

export default Hero;
