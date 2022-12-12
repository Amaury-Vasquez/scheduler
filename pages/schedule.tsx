import { useSchedules } from 'hooks/useSchedules';
import { ScheduleMenu } from 'components/schedule/ScheduleMenu';
import { ScheduleTable } from 'components/schedule/ScheduleTable';
import styles from 'styles/pages/schedule/scheduleLayout.module.scss';

const { scheduleLayout, scheduleContent } = styles;

const Schedule = () => {
  const { schedules } = useSchedules();
  return (
    <div className={scheduleLayout}>
      <ScheduleMenu />
      <div className={scheduleContent}>
        <ScheduleTable schedules={schedules} />
      </div>
    </div>
  );
};

export default Schedule;
