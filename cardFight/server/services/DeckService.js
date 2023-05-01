
import { BadRequest } from "../utils/Errors"
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

  async getDeckById(deckId) {
    const deck = await dbContext.Deck.findById(deckId)
  }

  async deleteDeck(deckId) {
    const deck = await dbContext.Deck.findById(deckId)
    if (!deck) throw new BadRequest('no deck at id:' + deckId)
    await deck.delete()
    return 'Deck has been deleted'
  }
  async editDeck(deckId, deckData) {
    const original = await dbContext.Deck.findById(deckId)
    if (!original) throw new BadRequest('no card at id:' + deckId)

    original.name = deckData.name !== undefined ? deckData.name : original.name
    original.cards = deckData.cards !== undefined ? deckData.cards : original.cards
    original.points = deckData.points !== undefined ? deckData.points : original.points
    original.picture = deckData.picture !== undefined ? deckData.picture : original.picture
    await original.save()
    return original
  }



}




export const deckService = new DeckService()