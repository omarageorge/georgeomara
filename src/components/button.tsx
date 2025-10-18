import { clsx } from 'clsx';

type Props = {
  label: string;
  primary?: boolean;
  className?: string;
};

const Button = ({ label, primary, className }: Props) => {
  return (
    <button
      className={clsx(
        'btn shadow-none hover:shadow hover:scale-105 transition-all duration-500 ease-in-out',
        className,
        { 'btn-primary': primary }
      )}
    >
      {label}
    </button>
  );
};

export default Button;
