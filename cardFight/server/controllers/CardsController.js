import BaseController from "../utils/BaseController";
import { cardsService } from "../services/CardsService";

export class CardsController extends BaseController {

  constructor() {
    super('api/cards')
    this.router
      .post('', this.createCards)
  }


  async createCards(req, res, next) {
    try {
      const card = await cardsService.createCard(req.body)
      return res.send(card)
    } catch (error) {
      next(error)
    }
  }


}