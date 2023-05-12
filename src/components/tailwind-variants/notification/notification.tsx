import { tv } from 'tailwind-variants';
import {
  ErrorIcon,
  WarningIcon,
  CheckBoldIcon,
  InformationIcon,
  Props as IconProps,
} from '@commercetools-uikit/icons';

type TNotificationProps = {
  type?: 'info' | 'success' | 'error' | 'warning';
  message: string;
};

const getIcon = (notificationType: TNotificationProps['type']) => {
  switch (notificationType) {
    case 'info':
      return InformationIcon;
    case 'error':
      return ErrorIcon;
    case 'warning':
      return WarningIcon;
    case 'success':
    default:
      return CheckBoldIcon;
  }
}

const iconColorMap: Record<string, IconProps['color']> = {
  'info': 'info',
  'success': 'primary',
  'warning': 'warning',
  'error': 'error',
};

const wrapper = tv({
  base: 'flex items-stretch text-left break-words hyphens-auto text-base text-solid font-sans border rounded py-2 px-4',

  variants: {
    type: {
      info: 'bg-info95 border-info85',
      success: 'bg-primary95 border-primary85',
      warning: 'bg-warning95 border-warning85',
      error: 'bg-error95 border-error85',
    }
  }
});

function Notification({ type = 'info', message }: TNotificationProps) {
  const Icon = getIcon(type);
  return (
    <div
      className={wrapper({ type })}
     >
      <div className="flex items-center">
        <Icon color={iconColorMap[type]} />
      </div>
      <div className="flex items-center grow pl-2">
        {message}
      </div>
    </div>
  );
}

export default Notification;