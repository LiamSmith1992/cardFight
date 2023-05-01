import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class DeckService {

  async createDeck(body) {
    const res = await api.post('/api/decks', body)
    logger.log('New Deck', res.data)
    AppState.decks.push(res.data)

  }


}


export const deckService = new DeckService()