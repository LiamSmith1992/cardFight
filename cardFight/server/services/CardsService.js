import { BadRequest } from "../utils/Errors"
import { dbContext } from "../db/DbContext.js"
class CardsService {


  async createCard(body) {
    const card = await dbContext.Cards.create(body)
    return card
  }
  async getCards(query) {
    const cards = await dbContext.Cards.find()
    return cards

  }
  async deleteCard(cardId) {
    const card = await dbContext.Cards.findById(cardId)
    if (!card) throw new BadRequest('no card at id:' + cardId)
    await card.delete()
    return 'Card has been deleted.'
  }

  async editCard(cardId, cardData) {
    const original = await dbContext.Cards.findById(cardId)
    if (!original) throw new BadRequest('no card at id:' + cardId)

    original.name = cardData.name !== undefined ? cardData.name : original.name
    original.type = cardData.type !== undefined ? cardData.type : original.type
    original.health = cardData.health !== undefined ? cardData.health : original.health
    original.strength = cardData.strength !== undefined ? cardData.strength : original.strength
    original.defense = cardData.defense !== undefined ? cardData.defense : original.defense
    original.magic = cardData.magic !== undefined ? cardData.magic : original.magic
    original.ability = cardData.ability !== undefined ? cardData.ability : original.ability
    original.picture = cardData.picture !== undefined ? cardData.picture : original.picture

    await original.save()
    return original

  }


}

export const cardsService = new CardsService()