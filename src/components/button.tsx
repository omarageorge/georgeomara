import { clsx } from 'clsx';

type Props = {
  label: string;
  primary?: boolean;
};

const Button = ({ label, primary }: Props) => {
  return (
    <button
      className={clsx('btn', {
        'btn-primary': primary,
      })}
    >
      {label}
    </button>
  );
};

export default Button;
