import { styled } from "../stitches.config";

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

const resetButtonStyles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  padding: '0',
  margin: '0',
  border: 'none',
  cursor: 'pointer',
  background: 'none',
  color: 'inherit',
  whiteSpace: 'nowrap',
  font: 'inherit',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  letterSpacing: 'inherit',
  wordSpacing: 'inherit',
  textDecoration: 'none',
  textRendering: 'inherit',
  textAlign: 'inherit',
  textTransform: 'inherit',
  textIndent: 'inherit',
  textShadow: 'inherit',
}

const backgroundColor = (color: string) => ({
  backgroundColor: color,
  '&:hover': {
    backgroundColor: `${color}25`,
  },
  '&:focus': {
    backgroundColor: `${color}25`,
  },
  '&:active': {
    backgroundColor: color,
  },
});

const BaseButton = styled('button', {
  ...resetButtonStyles,
  display: 'inline-flex',
  fontFamily: '$system',
  fontSize: '$L',
  '&:disabled': {
    cursor: 'not-allowed',
  },
  fontWeight: '500',
  borderRadius: '$radius4',
  padding: '0 $M',

  alignItems: 'center',
  color: '$surface',
  transition: 'background-color $linear80Ms',
  border: 'none',

  variants: {
    kind: {
      primary: {},
      secondary: {
        backgroundColor: '$surface',
        color: '$solid',
        border: '1px solid $neutral',
      },
    },
    size: {
      small: {
        height: '32px'
      },
      large: {
        height: '40px'
      }
    },
    tone: {
      primary: backgroundColor('$primary'),
      urgent: backgroundColor('$warning'),
    },
    disabled: {
      'true': {
        backgroundColor: '$neutral95',
        color: '$neutral60',
        cursor: 'not-allowed',
        '&:hover': {
          backgroundColor: '$neutral95',
        },
        '&:focus': {
          backgroundColor: '$neutral95',
        },
        '&:active': {
          backgroundColor: '$neutral95',
        },
      },
      'false': {}
    }
  },

  compoundVariants: [
    {
      kind: 'secondary',
      tone: 'primary',
      css: {
        backgroundColor: '$surface',
        '&:hover': {
          backgroundColor: '$neutral95',
        },
        '&:focus': {
          backgroundColor: '$surface',
        },
        '&:active': {
          backgroundColor: '$surface',
        },
      }
    }
  ],

  defaultVariants: {
    kind: 'primary',
    size: 'large',
    tone: 'primary',
    disabled: false,
  }
});

function Button({
  id,
  label,
  type = 'button',
  kind = 'primary',
  tone = 'primary',
  size = 'large',
  isDisabled = false,
  onClick = () => false
}: TButtonProps) {
  return (
    <BaseButton
      id={id}
      type={type}
      kind={kind}
      size={size}
      tone={tone}
      disabled={isDisabled}
      aria-label={label}
      aria-disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </BaseButton>
  );
}

export default Button;