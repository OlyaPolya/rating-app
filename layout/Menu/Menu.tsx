import { AppContext } from "@/context/app.context";
import styles from "./Menu.module.css";
import { useContext } from "react";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from '@/helpers/helpers';



export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string): void => {
    setMenu && setMenu(
      menu.map((item) => {
        if (item._id.secondCategory == secondCategory) {
          item.isOpened = !item.isOpened;
        }
        return item;
      })
    );
  };

  const buildFirstLevel = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu.map((menuItem) => {
          return (
            <div key={menuItem.route}>
              <Link href={`/${menuItem.route}`}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: menuItem.id == firstCategory,
                  })}
                >
                  {menuItem.icon}
                  <span>{menuItem.name}</span>
                </div>
              </Link>
              {menuItem.id == firstCategory && buildSecondLevel(menuItem)}
            </div>
          );
        })}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((item) => {
          if (
            item.pages
              .map((page) => page.alias)
              .includes(router.asPath.split("/")[2])
          ) {
            item.isOpened = true;
          }
          return (
            <div key={item._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={(): void => openSecondLevel(item._id.secondCategory)}
              >
                {item._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpen]: item.isOpened,
                })}
              >
                {buildThirdLevel(item.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element[] => {
    return pages.map((page) => (
      <Link
        href={`/${route}/${page.alias}`}
        key={page.alias}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${page.alias}` ==  router.asPath
        })}
      >
        {page.category}
      </Link>
    ));
  };

  return (
      <div className={styles.menu}>{buildFirstLevel()}</div>
  );
};
