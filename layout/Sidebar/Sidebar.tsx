import { Menu } from '../Menu/Menu';
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import Logo from '../Logo.svg';


export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo}/>
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
