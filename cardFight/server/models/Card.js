import { Schema } from "mongoose";

export const CardSchema = new Schema({

  name: { type: String, required: true, minLength: 1, maxLength: 20 },
  type: { type: String, required: true, enum: ['knight', 'mage', 'ninja', 'undead', 'beast'] },
  health: { type: Number, required: true, minimum: 1, maximum: 70 },
  strength: { type: Number, required: true, maximum: 20 },
  defense: { type: Number, required: true, maximum: 20 },
  magic: { type: Number, required: true, maximum: 20 },
  ability: { type: String, required: true, enum: ['none', 'peirce', 'heal', 'boost', 'combust', 'debuff', 'charge', 'sneak', 'vanish', 'find', 'summon'] },
  picture: { type: String, required: true, maxLength: 400 },
  deckId: { type: Schema.Types.ObjectId, ref: 'Deck' }
},
  {
    timestamps: true, toJSON: {
      virtuals: true
    }
  }
)

CardSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

CardSchema.virtual('deckId', {
  localField: '_id',
  foreignField: 'deckId',
  ref: 'deck'
})