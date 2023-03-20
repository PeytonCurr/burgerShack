import { fakeBurgerDb } from "../db/FakeBurgerDb.js";



class BurgersService {

  getBurgers() {
    let burgers = []
    burgers = fakeBurgerDb.burgers
    return burgers
  }

}

export const burgersService = new BurgersService();