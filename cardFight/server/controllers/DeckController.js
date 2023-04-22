import { deckService } from "../services/DeckService"
import BaseController from "../utils/BaseController"

export class CardsController extends BaseController {

  constructor() {
    super('api/cards')
    this.router
      .post('', this.createDeck)

  }
  async createDeck(req, res, next) {
    try {
      const deck = await deckService.createDeck(req.body)
      return res.send(deck)
    } catch (error) {
      next(error)
    }
  }




}