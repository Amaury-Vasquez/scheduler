import { useState } from 'react';
import { AiFillBell } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

import { UserMenu } from 'components/layout/UserMenu';
import { UserNotifications } from 'components/layout/UserNotifications';

export interface Options {
  index: number;
  opened: boolean;
  name: string;
  Icon: React.ElementType;
  Component: React.ElementType;
}

export const useUserOptions = () => {
  const isAuth = false;
  function getInitialOptions() {
    const opened = false;
    const names = ['notifications', 'profile'];
    const components = [UserNotifications, UserMenu];
    const icons = [AiFillBell, FaUserCircle];

    return names.map((name, index) => ({
      name,
      index,
      opened,
      Icon: icons[index],
      Component: components[index],
    }));
  }
  const [options, setOptionsState] = useState<Options[]>(getInitialOptions());

  const onMenuClick = (index: number) => {
    let active: number = -1;
    const tmp = options.map((item, i) => {
      if (item.opened) active = i;
      item.opened = false;
      return item;
    });
    if (active === -1 || active !== index) tmp[index].opened = true;
    setOptionsState(() => tmp);
  };

  return { options, onMenuClick };
};
