


export class Burger {
    constructor(data) {
        this.id = data.id
        this.buns = data.buns
        this.meat = data.meat
        this.cheese = data.cheese
        this.lettuce = data.lettuce != null ? data.lettuce : true
        this.tomato = data.tomato != null ? data.lettuce : true
        this.onion = data.onion != null ? data.lettuce : true
    }
}

class FakeBurgerDb {
    burgers = [
        new Burger({
            id: 1,
            buns: `potato`,
            meat: `bison`,
            cheese: `sharp cheddar`,
        }),
        new Burger({
            id: 2,
            buns: `plain`,
            meat: `turkey`,
            cheese: `american`,
            lettuce: false,
            tomato: false,
        }),
        new Burger({
            id: 3,
            buns: `egg`,
            meat: `beef`,
            cheese: `pepper jack`,
            tomato: false,
        }),
        new Burger({
            id: 4,
            buns: `sesame`,
            meat: `chicken`,
            cheese: `swiss`,
            onion: false,
        })
    ]
}

export const fakeBurgerDb = new FakeBurgerDb();