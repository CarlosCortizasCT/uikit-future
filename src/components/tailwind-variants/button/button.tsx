import { tv } from 'tailwind-variants';

type TButtonProps = {
  id?: string;
  label: string;
  type?: 'button' | 'submit' | 'reset';
  kind?: 'primary' | 'secondary';
  isDisabled?: boolean;
  size?: 'small' | 'large';
  tone?: 'urgent' | 'primary';
  onClick?: () => void;
};

const button = tv({
  base: 'inline-flex font-sans text-sm font-medium rounded px-4 items-center text-white transition-colors duration-75 ease-linear',
  variants: {
    disabled: {
      true: 'cursor-not-allowed bg-neutral95 text-neutral60 hover:bg-neutral95 focus:bg-neutral95 active:bg-neutral95',
      false: '',
    },
    kind: {
      primary: 'border-none',
      secondary: 'text-solid border-1 border-color-neutral bg-surface hover:bg-neutral95 border border-neutral',
    },
    size: {
      small: 'h-8',
      large: 'h-10',
    },
    tone: {
      primary: 'bg-primary hover:bg-primary25 focus:bg-primary25 active:bg-primary',
      urgent: 'bg-warning hover:bg-warning25 focus:bg-warning25 active:bg-warning',
    }
  },
  compoundVariants: [
    {
      kind: 'secondary',
      tone: 'primary',
      class: 'bg-surface hover:bg-neutral95 focus:bg-surface active:bg-surface',
    },
    {
      tone: 'primary',
      disabled: true,
      class: 'bg-neutral95 text-neutral60 hover:bg-neutral95 focus:bg-neutral95 active:bg-neutral95',
    },
    {
      tone: 'urgent',
      disabled: true,
      class: 'bg-neutral95 text-neutral60 hover:bg-neutral95 focus:bg-neutral95 active:bg-neutral95',
    }
  ],
  defaultVariants: {
    kind: 'primary',
    size: 'large',
    tone: 'primary',
    disabled: false,
  }
});

const Button = (props: TButtonProps) => {
  return (
    <button
      className={button({
        kind: props.kind,
        size: props.size,
        tone: props.tone || 'primary',
        disabled: props.isDisabled
      })}
    >
      {props.label}
    </button>
  );
};

export default Button;