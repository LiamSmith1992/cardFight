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

  async getOneCard(cardId) {
    const res = await api.get('api/cards/' + cardId)
    logger.log(res.data)
    AppState.activeCard = res.data
  }

  async deleteCard(cardId) {
    const res = await api.delete('api/cards/' + cardId)
    logger.log(res.data)
    const cards = AppState.cards.filter(i => i.id != cardId)
    AppState.cards = cards
  }






}


export const cardsService = new CardsService()