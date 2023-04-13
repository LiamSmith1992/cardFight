import BaseController from "../utils/BaseController";
import { cardsService } from "../services/CardsService";

export class CardsController extends BaseController {

  constructor() {
    super('api/cards')
    this.router
      .post('', this.createCard)
      .get('', this.getCards)
  }


  async createCard(req, res, next) {
    try {
      const card = await cardsService.createCard(req.body)
      return res.send(card)
    } catch (error) {
      next(error)
    }
  }

  async getCards(req, res, next) {
    try {
      const cards = await cardsService.getCards()
      return res.send(cards)
    } catch (error) {
      next(error)
    }
  }



}