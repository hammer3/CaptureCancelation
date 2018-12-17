
import {Mongo} from 'meteor/mongo';
import createMeteorCollection from '../util/createMeteorCollection';

export interface Lesson{
  time: number,
  subject: string,
  teacherId: string,
}

export interface Schedule {
  _id: string,
  name: string,
  dayOfTheWeek: string,
  schoolYear: string,
  halfterm: number,
  classId: string,
  lessons:Lesson[],
}

export const Schedules: Mongo.Collection<Schedule> = createMeteorCollection<Schedule>('schedule');