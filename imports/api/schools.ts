
import {Mongo} from 'meteor/mongo';
import createMeteorCollection from '../util/createMeteorCollection';

export interface School {
  _id: string,
  name: string,
  schooltype_id: number,
  street: string,
  city: string,
  country : string,
}

export const Schools: Mongo.Collection<School> = createMeteorCollection<School>('schools');