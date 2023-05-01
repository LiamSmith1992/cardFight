import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class DeckService {

  async createDeck(body) {
    const res = await api.post('/api/decks', body)
    logger.log('New Deck', res.data)
    AppState.decks.push(res.data)
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

}


export const deckService = new DeckService()