import Link from 'next/link';
import { MouseEvent } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import styles from 'styles/layout/sider.module.scss';
import { useClosableComponent } from 'hooks/useClosableComponent';
import { useNavigationItems } from 'hooks/useNavigationItems';

interface SiderProps {
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
}
const {
  siderMenu,
  closeButton,
  hideSider,
  onSiderFade,
  top,
  siderHomeLink,
  navigationMenu,
  navItem,
} = styles;

export const Sider = ({ callback, isActive }: SiderProps) => {
  const { onClose, willFade } = useClosableComponent(callback);
  const { navigationItems } = useNavigationItems();

  return (
    <div
      className={`${isActive ? siderMenu : hideSider} ${
        willFade && onSiderFade
      }`}
    >
      <div className={top}>
        <Link className={siderHomeLink} href="/">
          Home
        </Link>
        <button className={closeButton} onClick={onClose}>
          <AiOutlineClose />
        </button>
      </div>
      <nav className={navigationMenu}>
        {navigationItems.map((item, i) => (
          <Link
            className={navItem}
            href={item.path}
            key={item.path + `navigationitem:${i}`}
          >
            {item.icon}
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};
