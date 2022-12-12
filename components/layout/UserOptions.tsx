import { MenuHOC } from 'components/layout/MenuHOC';
import { useUserOptions } from 'hooks/useUserOptions';
import styles from 'styles/layout/header.module.scss';

export interface OptionMenuProps {
  willFade: boolean;
}

const { userOptions } = styles;

export const UserOptions = () => {
  const { options, onMenuClick } = useUserOptions();

  return (
    <ul className={userOptions}>
      {options.map(({ index, opened, Component, name, Icon }) => {
        return (
          <MenuHOC
            Icon={Icon}
            key={name + index + opened}
            isOpen={opened}
            callback={onMenuClick}
            index={index}
            Component={Component}
          />
        );
      })}
    </ul>
  );
};
