'use client';
import { Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { motion } from 'framer-motion';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '10+', label: 'Apps Shipped' },
  { value: '1M+', label: 'Users Served' },
  { value: '3', label: 'Countries' },
];

const Stats = () => {
  return (
    <motion.section {...getSectionAnimation}>
      <Wrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-dark-3">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-3xl md:text-4xl font-bold text-accent">{value}</span>
              <span className="font-mono text-xs text-text uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default Stats;
