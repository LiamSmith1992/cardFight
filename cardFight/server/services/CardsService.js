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

}

export const cardsService = new CardsService()