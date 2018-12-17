
import {Mongo} from 'meteor/mongo';
import createMeteorCollection from '../util/createMeteorCollection';

export interface Subject {
  _id: string,
  name: string,
  description: number,
}

export const Subjects: Mongo.Collection<Subject> = createMeteorCollection<Subject>('subjects');