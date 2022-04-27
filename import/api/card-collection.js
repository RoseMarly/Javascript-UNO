import { Mongo } from 'meteor/mongo';

export const cardCollection = new Mongo.Collection('cards');
