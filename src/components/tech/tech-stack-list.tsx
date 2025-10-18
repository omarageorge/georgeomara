import css from '@/assets/css.svg';
import docker from '@/assets/docker.svg';
import expo from '@/assets/expo.svg';
import html from '@/assets/html.svg';
import javaScript from '@/assets/javascript.svg';
import nestJs from '@/assets/nestjs.svg';
import nextJs from '@/assets/nextjs.svg';
import nodeJs from '@/assets/nodejs.svg';
import postgres from '@/assets/postgresql.svg';
import reactJs from '@/assets/reactjs.svg';
import tailwindcss from '@/assets/tailwindcss.svg';
import typeScript from '@/assets/typescript.svg';
import TechStack from '@/components/tech/tech-stack';

const TechStackList = () => (
  <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
    <TechStack image={html} label='HTML' />
    <TechStack image={css} label='CSS' />
    <TechStack image={tailwindcss} label='TailwindCSS' />
    <TechStack image={javaScript} label='JavaScript' />
    <TechStack image={typeScript} label='TypeScript' />
    <TechStack image={reactJs} label='React' />
    <TechStack image={expo} label='React Native' />
    <TechStack image={nextJs} label='Next.js' />
    <TechStack image={nodeJs} label='Node.js' />
    <TechStack image={nestJs} label='Nest.js' />
    <TechStack image={postgres} label='PostgreSQL' />
    <TechStack image={docker} label='Docker' />
  </div>
);

export default TechStackList;
