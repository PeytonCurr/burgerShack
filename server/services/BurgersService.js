import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { Burger, fakeBurgerDb } from "../db/FakeBurgerDb.js";



class BurgersService {

  async getBurgers() {
    let burgers = []
    burgers = await fakeBurgerDb.burgers
    return burgers
  }

  async getBurgerById(burgerId) {
    const burger = await fakeBurgerDb.burgers.filter(b => b.id == burgerId)
    if (!burger) {
      throw new BadRequest(`The ID was invalid, no burger was found`)
    }
    return burger
  }

  async createBurger(burgerData) {
    if (!burgerData.id || !burgerData.buns || !burgerData.meat || !burgerData.cheese) {
      throw new BadRequest(`No Burger Data Found`)
    }
    const builtBurger = new Burger(burgerData)
    await fakeBurgerDb.burgers.push(builtBurger)
    return builtBurger
  }

}

export const burgersService = new BurgersService();