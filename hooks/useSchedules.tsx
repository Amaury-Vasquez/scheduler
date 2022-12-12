import { scheduleMock } from 'mockData/scheduleMock';

export function querySchedule() {
  return scheduleMock;
}
export const useSchedules = () => {
  const schedules = querySchedule();
  return { schedules };
};
