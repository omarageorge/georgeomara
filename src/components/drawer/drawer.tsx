import LinkItem from '@/components/nav/link-item';
import Logo from '@/components/nav/logo';
import Nav from '@/components/nav/nav';
import { navLinks } from '@/lib/data';

type Props = {
  children: React.ReactNode;
};

const Drawer = ({ children }: Props) => (
  <div className='drawer'>
    <input id='my-drawer-1' type='checkbox' className='drawer-toggle' />
    <div className='drawer-content'>
      <div className='container'>
        <Nav />
        {/* Page content here */}
        <main className='w-full px-6'>{children}</main>
      </div>
    </div>
    <div className='drawer-side'>
      <label
        htmlFor='my-drawer-1'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>
      <ul className='menu bg-base-200 min-h-full w-80 p-4'>
        {/* Sidebar content here */}
        <div className='w-full h-auto py-2 rounded-md'>
          <Logo />
        </div>

        {navLinks.map(({ href, label }) => (
          <LinkItem key={label} href={href} label={label} />
        ))}
      </ul>
    </div>
  </div>
);

export default Drawer;
