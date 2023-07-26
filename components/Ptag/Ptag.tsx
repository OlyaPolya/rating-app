import { PtagProps } from './Ptag.props';
import cn from 'classnames';
import styles from './Ptag.module.css';

export const Ptag = ({ size = 'M', children, className, ...props }: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.S]: size == 'S',
        [styles.M]: size == 'M',
        [styles.L]: size == 'L',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
