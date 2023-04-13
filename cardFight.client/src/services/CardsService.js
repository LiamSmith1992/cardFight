import { api } from "./AxiosService"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"

class CardsService {

  async createCard(cardData) {
    const res = await api.post('api/cards', cardData)
    logger.log('[create card]', res.data)
    AppState.cards.push(res.data)
  }

  async getCards() {
    const res = await api.get('api/cards')
    logger.log(res.data)
    AppState.cards = res.data
  }


}


export const cardsService = new CardsService()