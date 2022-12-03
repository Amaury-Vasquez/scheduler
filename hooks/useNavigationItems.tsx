import { BiTask } from 'react-icons/bi';
import { TfiAgenda } from 'react-icons/tfi';
import { AiOutlineSchedule } from 'react-icons/ai';

export interface NavigationKey {
  text: string;
  path: string;
  icon: JSX.Element;
}

export const useNavigationItems = () => {
  const navigationItems: NavigationKey[] = [
    {
      text: 'schedule',
      path: '/schedule',
      icon: <AiOutlineSchedule />,
    },
    {
      text: 'agenda',
      path: '/agenda',
      icon: <TfiAgenda />,
    },
    {
      text: 'tasks',
      path: '/tasks',
      icon: <BiTask />,
    },
  ];

  return { navigationItems };
};
