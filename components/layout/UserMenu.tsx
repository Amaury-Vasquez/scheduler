import { OptionMenuProps } from './UserOptions';
import styles from 'styles/layout/userMenu.module.scss';

const { userButton, menu, fadeMenu } = styles;

export const UserMenu = ({ willFade }: OptionMenuProps) => {
  return <div className={`${menu} ${willFade && fadeMenu}`}>hola</div>;
};
