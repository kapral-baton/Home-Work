const coffeeTypes = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}


class Coffee {
    constructor(obj) {
        this.title = obj.title;
        this.ingredients = obj.ingredients;
        this.coffeeName = '';
    }

    makeCoffee(){
        let  a = '';
        for(let key in this.ingredients){
            a+=`<p style="height: ${this.ingredients[key]}%" class="ingredient ${key}">${key}</p>`
        }

        return `<div class="cup">
                    <div class="coffee ${this.coffeeName}">
                        <div class="coffee__ingredients">
                            ${a}
                       
                        </div>
                    </div>
                    <p class="coffee__title">${this.title}</p>
                </div>`;
    }

}

class Espresso extends Coffee {
    constructor(obj) {
        super(obj);
        this.coffeeName = "coffee--espresso";
    }
}


class EspressoMilk extends Coffee {
    constructor(obj) {
        super(obj);
        this.coffeeName = "coffee--espressoMilk";
    }
}

class Alcoholic extends Coffee {
    constructor(obj) {
        super(obj);
        this.coffeeName = " coffee--alcoholic";
    }
}


class Dessert extends Coffee {
    constructor(obj) {
        super(obj);
        this.coffeeName = "coffee--dessert";
    }
}


let newCoffee = [];
for(let key in coffeeTypes) {
    switch (key) {
        case 'Espresso' :
            coffeeTypes[key].forEach(item => newCoffee.push(new Espresso(item)));
            break;
        case 'EspressoMilk' :
            coffeeTypes[key].forEach(item => newCoffee.push(new EspressoMilk(item)));
            break;
        case 'Alcoholic' :
            coffeeTypes[key].forEach(item => newCoffee.push(new Alcoholic(item)));
            break;
        case 'Dessert' :
            coffeeTypes[key].forEach(item => newCoffee.push(new Dessert(item)));
            break;
    }
}

document.write(` <section class="cups">${newCoffee.map(element => element.makeCoffee()).join('')}</section>`);























