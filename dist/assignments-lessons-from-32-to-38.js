"use strict";
{
    class Game {
        constructor(title, price) {
            this.title = title;
            this.price = price;
        }
    }
    class RPG extends Game {
        constructor(title, price, rate) {
            super(title, price);
            this.rate = rate;
        }
        getLocation() {
            return "Location";
        }
        getDiscount() {
            return "Discount";
        }
    }
    class Action extends Game {
        constructor(title, price, rate, company) {
            super(title, price);
            this.rate = rate;
            this.company = company;
        }
        getLocation() {
            return "Location";
        }
        getDiscount() {
            return "Discount";
        }
    }
    let gameOne = new RPG("Ys", 100, 10);
    let gameTwo = new Action("Uncharted", 90, 15, "Sony");
    console.log(gameOne.title);
    console.log(gameOne.price);
    console.log(gameOne.rate);
    console.log(gameOne.getDiscount());
    console.log(gameOne.getLocation());
    console.log(gameTwo.title);
    console.log(gameTwo.price);
    console.log(gameTwo.rate);
    console.log(gameTwo.company);
    console.log(gameTwo.getDiscount());
    console.log(gameTwo.getLocation());
}
{
    function showTypes(item1 = "Nothing", item2 = "Nothing", item3 = "Nothing") {
        return `${item1} - ${item2} - ${item3}}`;
    }
    console.log(showTypes());
    console.log(showTypes("String"));
    console.log(showTypes("String", 100));
    console.log(showTypes("String", 100, true));
}
{
    class Game {
        constructor(title, price) {
            this.title = title;
            this.price = price;
        }
        getDiscount(param) {
            console.log(`The Discount Is ${param}`);
        }
    }
    let gameOne = new Game("Ys", 100);
    let gameTwo = new Game(2064, 100);
    console.log(gameOne.title);
    console.log(gameOne.price);
    gameOne.getDiscount("50");
    console.log(gameTwo.title);
    console.log(gameTwo.price);
    gameTwo.getDiscount(80);
}
//# sourceMappingURL=assignments-lessons-from-32-to-38.js.map