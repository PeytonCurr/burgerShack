import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";



export class BurgersController extends BaseController {

  constructor() {
    super(`api/burgers`)
    this.router
      .get(``, this.getBurgers)
  }
  async getBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getBurgers();
    } catch (error) {
      next(error)
    }
  }
}