import { AppContext } from '@/context/app.context';
import styles from "./Menu.module.css";
import { useContext } from 'react';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';


// import cn from "classnames";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);

  const buildFirstLevel = () => {

  }

  const buildSecondLevel = () => {};

  const buildThirdLevel = () => {};


  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

