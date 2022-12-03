import { UserMenu } from 'components/layout/UserMenu';
import styles from 'styles/layout/header.module.scss';

interface HeaderProps {
  callback: Function;
  showButton: boolean;
}

const { header, buttonWrapper, menuButton, hide, userButton } = styles;

export const Header = ({ callback, showButton }: HeaderProps) => {
  return (
    <header className={header}>
      <div className={buttonWrapper}>
        <button
          className={showButton ? menuButton : hide}
          disabled={!showButton}
          onClick={() => callback()}
        >
          <div />
          <div />
          <div />
        </button>
      </div>
      <div className={buttonWrapper}>
        <UserMenu />
      </div>
    </header>
  );
};
