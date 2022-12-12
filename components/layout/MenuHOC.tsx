import { RegisterMenu } from './RegisterMenu';
import { useClosableComponent } from 'hooks/useClosableComponent';
import styles from 'styles/layout/userMenu.module.scss';

interface MenuProps {
  isOpen: boolean;
  callback: Function;
  index: number;
  Icon: React.ElementType;
  Component: React.ElementType;
}

const { buttonWrapper, userButton } = styles;

export const MenuHOC = ({
  isOpen,
  callback,
  index,
  Component,
  Icon,
}: MenuProps) => {
  const { onClose, willFade } = useClosableComponent(callback, 200, index);
  const handleClick = () => {
    if (isOpen) onClose();
    else callback(index);
  };
  const isAuth = true;

  return (
    <div className={buttonWrapper}>
      <button
        className={userButton}
        disabled={willFade}
        onClick={() => handleClick()}
      >
        <Icon />
      </button>
      {isOpen &&
        (isAuth ? (
          <Component willFade={willFade} />
        ) : (
          <RegisterMenu willFade={willFade} />
        ))}
    </div>
  );
};
