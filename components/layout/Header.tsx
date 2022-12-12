import { HiOutlineMenu } from 'react-icons/hi';

import { UserOptions } from './UserOptions';
import styles from 'styles/layout/header.module.scss';

interface HeaderProps {
  callback: Function;
  showButton: boolean;
}

const { header, buttonWrapper, menuButton, hide } = styles;

export const Header = ({ callback, showButton }: HeaderProps) => {
  return (
    <header className={header}>
      <div className={buttonWrapper}>
        <button
          className={showButton ? menuButton : hide}
          disabled={!showButton}
          onClick={() => callback()}
        >
          <HiOutlineMenu />
        </button>
      </div>
      <UserOptions />
    </header>
  );
};
