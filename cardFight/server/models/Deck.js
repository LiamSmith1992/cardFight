import { Schema } from "mongoose";

export const DeckSchema = new Schema({

  name: { type: String, required: true, minLength: 1, maxLength: 20 },
  points: { type: Number, required: true, maximum: 201 },
  picture: { type: String, required: true, maxLength: 400 },
  description: { type: String }

}, { timestamps: true, toJSON: { virtuals: true } })

DeckSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})