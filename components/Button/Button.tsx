import { ButtonProps } from './Buttom.props';
import styles from './Buttom.module.css';
import cn from 'classnames';
import ArrowIcon from './Arrow.svg';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.clear]: appearance == 'clear',
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == 'down',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

