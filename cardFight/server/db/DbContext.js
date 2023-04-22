import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CardSchema } from "../models/Card";
import { DeckSchema } from "../models/Deck";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Cards = mongoose.model('Card', CardSchema);

  Deck = mongoose.model('Deck', DeckSchema);
}

export const dbContext = new DbContext()
