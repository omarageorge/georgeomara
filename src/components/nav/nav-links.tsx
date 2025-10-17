type Props = {
  children: React.ReactNode;
};

const NavLinks = ({ children }: Props) => (
  <ul className='hidden md:flex menu menu-horizontal px-1'>{children}</ul>
);

export default NavLinks;
