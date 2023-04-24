import { deckService } from "../services/DeckService"
import BaseController from "../utils/BaseController"

export class DeckController extends BaseController {

  constructor() {
    super('api/cards')
    this.router
      .post('', this.createDeck)
      .get('', this.getDecks)
      .delete('/:deckId', this.deleteDeck)
      .put('/:deckId', this.editDeck)


  }

  async createDeck(req, res, next) {
    try {
      const deck = await deckService.createDeck(req.body)
      return res.send(deck)
    } catch (error) {
      next(error)
    }
  }

  async getDecks(req, res, next) {
    try {
      const decks = await deckService.getDecks()
      return res.send(decks)
    } catch (error) {
      next(error)
    }

  }

  async deleteDeck(req, res, next) {
    try {
      const message = await deckService.deleteDeck(req.params.deckId)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
  async editDeck(req, res, next) {
    try {
      const updated = await deckService.editDeck(req.params.deckId, req.body)
      return res.send(updated)
    } catch (error) {
      next(error)
    }
  }


}