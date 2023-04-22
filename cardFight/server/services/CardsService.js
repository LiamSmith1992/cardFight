import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
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




}

export const cardsService = new CardsService()