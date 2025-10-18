import me from '@/assets/me.png';
import Button from '@/components/button';
import SectionHeading from '@/components/section-heading';
import SectionLabel from '@/components/section-label';
import TechStackList from '@/components/tech/tech-stack-list';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header
        id='intro'
        className='w-full h-[calc(70vh-4rem)] md:h-[calc(100vh-4rem)] mt-16 flex flex-col items-center justify-center'
      >
        <div className='space-y-4 md:space-y-6 text-center md:text-left'>
          <h2 className='text-medium'>
            Hi! I&apos;m <span className='font-bold text-primary'>George</span>
          </h2>
          <h3 className='text-large'>Full-Stack Software Developer</h3>
          <h3 className='text-body max-w-sm md:max-w-md lg:max-w-xl mx-auto md:ml-0'>
            Passionate about building high-performance <strong>Web</strong> and{' '}
            <strong>Mobile</strong> apps that solve your toughest challenges and
            boost business growth.
          </h3>
          <h4 className='w-fit flex gap-x-1 text-lg mx-auto md:ml-0'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6 text-orange-600'
              >
                <path
                  fillRule='evenodd'
                  d='m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            <span>Gulu, Uganda</span>
          </h4>

          <Link href='#about'>
            <Button
              label='Get to know me'
              primary
              className='md:btn-lg rounded-xl'
            />
          </Link>
        </div>
      </header>

      <main className='w-full space-y-8 md:space-y-16 mb-8 md:mb-16'>
        <section id='about' className='w-full space-y-16'>
          <div className='flex flex-col sm:flex-row gap-6 md:gap-8'>
            <div className='flex-1 md:flex-none w-full sm:w-56 md:w-80 justify-items-center content-center'>
              <Image
                src={me}
                priority
                placeholder='blur'
                alt='A photo of Omara George Boniface'
                className='aspect-square sm:aspect-9/12 object-cover object-top overflow-hidden rounded-xl shadow-lg'
              />
            </div>

            <div className='flex-1 space-y-4 text-left content-center'>
              <SectionHeading label='about me' />

              <div className='text-body space-y-4'>
                <p>
                  Experienced software engineer with over four years of
                  experience developing and optimizing solid front-end and
                  server-side applications.
                </p>

                <p>
                  Expertise in designing and implementing RESTful
                  APIs, architecting intricate database systems, and integrating
                  with cloud platforms. competent in performance tuning to
                  ensure the scalability and reliability of overall systems.
                </p>
              </div>
            </div>
          </div>

          <div id='stack' className='space-y-10'>
            <SectionLabel label='technologies I enjoy working with' />
            <TechStackList />
          </div>
        </section>

        <section id='projects' className='space-y-10 md:space-y-16'>
          <SectionHeading label='some of my work' left />
        </section>
      </main>
    </>
  );
}
