import HamburgerMenu from '@/components/nav/hamburger-menu';
import LinkItem from '@/components/nav/link-item';
import Logo from '@/components/nav/logo';
import NavLinks from '@/components/nav/nav-links';
import { navLinks } from '@/lib/data';

const Nav = () => {
  return (
    <nav className='navbar bg-base-100 overlay-pane'>
      <div className='flex-1'>
        <Logo />
      </div>
      <div className='flex-none'>
        <NavLinks>
          {navLinks.map(({ href, label }) => (
            <LinkItem key={label} href={href} label={label} />
          ))}
        </NavLinks>

        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
