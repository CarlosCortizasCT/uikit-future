import {
  ErrorIcon,
  WarningIcon,
  CheckBoldIcon,
  InformationIcon,
  Props as IconProps,
} from '@commercetools-uikit/icons';
import { styled } from "../stitches.config";

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

const NotificationWrapper = styled('div', {
  display: 'flex',
  alignItems: 'strech',
  textAlign: 'left',
  wordBreak: 'break-word',
  hyphens: 'auto',
  fontSize: '$M',
  color: '$solid',
  fontFamily: '$system',

  border: '1px solid',
  borderRadius: '$radius4',
  padding: '8px 16px',

  variants: {
    type: {
      info: {
        backgroundColor: '$info95',
        borderColor: '$info85',
      },
      success: {
        backgroundColor: '$primary95',
        borderColor: '$primary85',
      },
      warning: {
        backgroundColor: '$warning95',
        borderColor: '$warning85',
      },
      error: {
        backgroundColor: '$error95',
        borderColor: '$error85',
      },
    }
  }
});

const IconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const MessageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  padding: '0 0 0 8px',
});

function Notification({ type = 'info', message }: TNotificationProps) {
  const Icon = getIcon(type);
  return (
    <NotificationWrapper
      type={type}
     >
      <IconWrapper>
        <Icon color={iconColorMap[type]} />
      </IconWrapper>
      <MessageWrapper>
        {message}
      </MessageWrapper>
    </NotificationWrapper>
  );
}

export default Notification;