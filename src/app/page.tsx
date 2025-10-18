import me from '@/assets/me.png';
import ContactLinks from '@/components/contact-links';
import ProjectsList from '@/components/projects/projects-list';
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
          <h3 className='text-medium'>
            Hi! I&apos;m <span className='font-bold text-primary'>George</span>
          </h3>
          <h1 className='text-large'>Full-Stack Software Developer</h1>
          <p className='text-base md:text-lg max-w-sm md:max-w-md lg:max-w-xl mx-auto md:ml-0'>
            Passionate about building high-performance <strong>web</strong> and{' '}
            <strong>mobile</strong> apps that help businesses grow and resolve
            any pressing challenges.
          </p>
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
            <span>Kampala, Uganda</span>
          </h4>

          <Link
            href='/my-resume.pdf'
            download='Omara_George_Boniface_Professional_Resume.pdf'
            target='_blank'
            className='btn btn-primary md:btn-lg rounded-xl animate-pulse'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-6'
            >
              <path d='M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z' />
            </svg>

            <span>Download Resume</span>
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
                className='aspect-square sm:aspect-9/12 object-cover object-top overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-all duration-500 ease-in-out'
              />
            </div>

            <div className='flex-1 space-y-4 text-left content-center'>
              <SectionHeading label='about me' />

              <div className='text-body space-y-4'>
                <p>
                  I&apos;m a <strong>Software Engineer</strong> with over four
                  years of experience building and optimizing modern{' '}
                  <strong>web</strong> and <strong>mobile</strong> applications.
                  I handle everything from the interactive interfaces you see (
                  <strong>Front-End</strong>) to the powerful logic running
                  behind the scenes (<strong>Back-End</strong>).
                </p>

                <p>
                  My core expertise is in building scalable{' '}
                  <strong>RESTful APIs</strong> using technologies like{' '}
                  <strong>Node.js</strong> and <strong>Nest.js</strong>. I
                  secure and deploy systems using <strong>Docker</strong> and
                  manage complex data with <strong>Postgres</strong>. Whether
                  it&apos;s setting up a high-speed production server or
                  automating deployments with <strong>CI/CD</strong> pipelines,
                  my goal is to deliver reliable, high-performance systems that
                  can handle serious growth.
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
          <ProjectsList />
        </section>

        <section id='contact'>
          <div className='w-full max-w-xl mx-auto space-y-6'>
            <SectionLabel label="Let's connect today!" />

            <p className='w-full max-w-md mx-auto text-center'>
              Thanks for dropping in! Got questions or just want to connect?
              Feel free to reach out on any platform below. 😊
            </p>

            <ContactLinks />
          </div>
        </section>
      </main>
    </>
  );
}
