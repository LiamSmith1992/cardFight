import { dbContext } from "../db/DbContext"


class DeckService {
  async createDeck(body) {
    const deck = await dbContext.Deck.create(body)
    return deck
  }

}


export const deckService = new DeckService()