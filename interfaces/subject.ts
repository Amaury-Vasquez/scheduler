import { Event } from './event';
import { Grades } from './grades';

export interface Subject {
  name: string;
  teacher?: string;
  classDays?: {
    count: number;
    hours: Event[];
  };
  grades?: Grades;
  level?: number;
}
