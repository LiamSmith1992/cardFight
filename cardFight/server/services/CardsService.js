import { dbContext } from "../db/DbContext.js"
class CardsService {

  async createCard(body) {
    const card = await dbContext.Cards.create(body)
    return card
  }

}

export const cardsService = new CardsService()