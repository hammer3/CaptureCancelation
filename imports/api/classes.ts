
import {Mongo} from 'meteor/mongo';
import createMeteorCollection from '../util/createMeteorCollection';

export interface Class {
  _id: string,
  name: string,
  schoolId: string,
}

export const Classes: Mongo.Collection<Class> = createMeteorCollection<Class>('classes');