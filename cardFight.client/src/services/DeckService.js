import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class DeckService {

  async createDeck(body) {
    const res = await api.post('/api/decks', body)
    logger.log('New Deck', res.data)
    AppState.decks.push(res.data)
    return res.data
  }

  async getDecks() {
    const res = await api.get('/api/decks')
    logger.log('Decks', res.data)
    AppState.decks = res.data
  }

  async getDeckById(deckId) {
    const res = await api.get('/api/decks/' + deckId)
    AppState.activeDeck = res.data
  }

  async editDeck(deck) {
    const res = await api.put('api/decks/' + deck._id, deck)
    logger.log(res.data)

  }

  async deleteDeck(deckId) {
    const res = await api.delete('api/decks/' + deckId)
    const decks = AppState.decks.filter(i => i.id != deckId)
    AppState.decks = decks
  }




}


export const deckService = new DeckService()