import { Schema } from "mongoose";

export const DeckSchema = new Schema({

  name: { type: String, required: true, minLength: 1, maxLength: 20 },
  cards: { type: Array, },
  points: { type: Number, required: true, maximum: 201 },
  picture: { type: String, required: true, maxLength: 400 },

}, { timestamps: true, toJSON: { virtuals: true } })

DeckSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})