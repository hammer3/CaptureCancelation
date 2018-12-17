import {Mongo} from 'meteor/mongo';
import lockCollection from './lockMeteorCollection';

export default function createMeteorCollection<DocInterface>(name: string): Mongo.Collection<DocInterface> {
  let collection: Mongo.Collection<DocInterface> = new Mongo.Collection<DocInterface>(name);
  return lockCollection<DocInterface>(collection);
}