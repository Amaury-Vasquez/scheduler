import Link from 'next/link';
import { FaUserAltSlash } from 'react-icons/fa';

import styles from 'styles/layout/userMenu.module.scss';

interface RegisterMenuProps {
  willFade: boolean;
}

const { authLink, auth, userNotAuth, message, fadeMenu, menu } = styles;

export const RegisterMenu = ({ willFade }: RegisterMenuProps) => {
  return (
    <div className={`${menu} ${willFade && fadeMenu}`}>
      <span className={userNotAuth}>
        <FaUserAltSlash />
      </span>
      <span className={message}>
        {`Parece que no estás autenticado, inicia sesión o registrate para poder almacenar tu información.`}
      </span>

      <nav className={auth}>
        <Link className={authLink} href="/register">
          registrarme
        </Link>
        <Link className={authLink} href="/login">
          ingresar
        </Link>
      </nav>
    </div>
  );
};
