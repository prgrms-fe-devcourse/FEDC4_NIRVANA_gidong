import { Icon } from '@components/Icon';
import { StyledToast } from './Toast.style';

interface ToastProps {
  width?: number;
  height?: number;
  content: string;
  type: 'WARNING' | 'ERROR' | 'ALERT' | 'SUCCESS';
}

const Toast = ({ width, height, content, type }: ToastProps) => {
  return (
    <StyledToast
      width={width}
      height={height}
      toastType={type}>
      {content}
      <Icon
        name='close'
        size={14}
      />
    </StyledToast>
  );
};

export default Toast;
