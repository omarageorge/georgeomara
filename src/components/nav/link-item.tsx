import Link from 'next/link';

type Props = {
  href: string;
  label: string;
};

const LinkItem = ({ href, label }: Props) => (
  <li>
    <Link href={href}>{label}</Link>
  </li>
);

export default LinkItem;
