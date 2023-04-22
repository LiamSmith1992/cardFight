import { dbContext } from "../db/DbContext"


class DeckService {
  async createDeck(body) {
    const deck = await dbContext.Deck.create(body)
    return deck
  }
  async getDecks() {
    const decks = await dbContext.Deck.find()
    return decks
  }

}


export const deckService = new DeckService()