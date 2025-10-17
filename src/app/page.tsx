import Button from '@/components/button';

export default function Home() {
  return (
    <>
      <header className='w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center'>
        <div className='space-y-4 md:space-y-6 text-center md:text-left'>
          <h2 className=' font-semibold text-3xl lg:text-5xl'>
            Hi! I&apos;m{' '}
            <span className='font-bold text-orange-600'>George</span>
          </h2>
          <h3 className='font-bold text-4xl lg:text-6xl'>
            Full-Stack Software Developer
          </h3>
          <h3 className='font-normal text-base lg:text-lg max-w-sm md:max-w-md lg:max-w-xl mx-auto md:ml-0'>
            Passionate about building high-performance web and mobile apps that
            solve your toughest challenges and boost your business growth.
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

          <Button label='Get to know me' primary />
        </div>
      </header>
    </>
  );
}
