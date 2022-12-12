import { useScheduleMenu } from 'hooks/useScheduleMenu';
import styles from 'styles/pages/schedule/scheduleMenu.module.scss';

const { menu, optionButton } = styles;

export const ScheduleMenu = () => {
  const { scheduleOptions } = useScheduleMenu();
  return (
    <div className={menu}>
      {scheduleOptions.map((option, i) => (
        <button className={optionButton} key={'schedulebutton:' + i}>
          {option.optionName}
          {option.icon}
        </button>
      ))}
    </div>
  );
};
