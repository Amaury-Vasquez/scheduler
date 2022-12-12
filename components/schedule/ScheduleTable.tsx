import { CollegeSchedule } from 'interfaces/schedule';
import { IoCreateOutline } from 'react-icons/io5';
import styles from 'styles/pages/schedule/scheduleTable.module.scss';

interface ScheduleTableProps {
  schedules: CollegeSchedule[];
}

const { emptySchedule, advertisement, create } = styles;

export const ScheduleTable = ({ schedules }: ScheduleTableProps) => {
  if (schedules.length === 0)
    return (
      <div className={emptySchedule}>
        <div>
          <span className={advertisement}>
            {`Looks like you don't have any schedules yet!`}
          </span>
          <span className={create}>
            <IoCreateOutline />
            <button>Create one</button>
          </span>
        </div>
      </div>
    );
  return (
    <div className={emptySchedule}>
      <div></div>
    </div>
  );
};
