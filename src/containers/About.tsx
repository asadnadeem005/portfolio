'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const About = () => {
  const { title, img, list } = aboutSection;

  return (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, I'm <span className='font-extrabold'>Muhammad Asad</span> — a Senior Full Stack Developer
            with 5+ years of experience building AI-powered SaaS, fintech, and mobile products end to end.
          </p>
          <p>
            Currently based in Dubai, UAE, working at{' '}
            <Link
              href="https://softbuilders.com/"
              target="_blank"
              className="text-accent"
            >
              Softbuilders Software Design LLC
            </Link>
            , where I'm the sole engineer on Effora, a multi-tenant AI business suite for the salon & wellness industry,
            and build fintech products — digital wallets, credit ledgers, automated payouts, and OpenAI Vision-powered
            identity verification — for UAE enterprise clients.
          </p>
          <p>
            I'm also an AI-Augmented Engineer — I leverage Claude AI, Cursor AI, ChatGPT, and GitHub Copilot to accelerate
            delivery and improve code quality. I hold a{' '}
            <span className='font-semibold'>Professional Scrum Master (PSM I)</span> certification, a{' '}
            <span className='font-semibold'>Bachelor's degree in Computer Science</span> from the University of Sargodha,
            and a UAE driving license.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  );
};

export default About;
