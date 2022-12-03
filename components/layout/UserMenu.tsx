import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';

import { FaUserAltSlash } from 'react-icons/fa';
import styles from 'styles/layout/userMenu.module.scss';
import { useActiveToggle } from 'hooks/useActiveToggle';
import { useClosableComponent } from 'hooks/useClosableComponent';

const { userButton, menu, authLink, auth, userNotAuth, message, fadeMenu } =
  styles;

export const UserMenu = () => {
  const { isActive, handleClick } = useActiveToggle(false);
  const { onClose, willFade } = useClosableComponent(handleClick);
  const isAuth = false;

  const UserMenu = <></>;
  const RegisterMenu = (
    <>
      <span className={userNotAuth}>
        <FaUserAltSlash />
      </span>
      <span className={message}>
        {`Seems like you're not authenticated, login or register so you can save
        your data.`}
      </span>

      <nav className={auth}>
        <Link className={authLink} href="/register">
          register
        </Link>
        <Link className={authLink} href="/login">
          login
        </Link>
      </nav>
    </>
  );

  return (
    <>
      <button
        className={userButton}
        disabled={willFade}
        onClick={() => (isActive ? onClose() : handleClick())}
      >
        <FaUserCircle />
      </button>
      {isActive && (
        <div className={`${menu} ${willFade && fadeMenu}`}>
          {isAuth ? UserMenu : RegisterMenu}
        </div>
      )}
    </>
  );
};
