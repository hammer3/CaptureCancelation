
import {Mongo} from 'meteor/mongo';
import createMeteorCollection from '../util/createMeteorCollection';

export interface Address {
  _id: string,
  street: string,
  city: string,
  country : string,
}

export const Addresses: Mongo.Collection<Address> = createMeteorCollection<Address>('addresses');