import { AiFillBell } from 'react-icons/ai';

import { OptionMenuProps } from './UserOptions';
import styles from 'styles/layout/userMenu.module.scss';

const { menu, fadeMenu } = styles;

export const UserNotifications = ({ willFade }: OptionMenuProps) => {
  return <div className={`${menu} ${willFade && fadeMenu}`}>notificame</div>;
};
