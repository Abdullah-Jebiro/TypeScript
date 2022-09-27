"use strict";
{
    let user = {
        id: 100,
        username: "Elzero",
        state: true,
        getName() {
            return this.username;
        }
    };
    user.id = 200;
    user.id = "200";
    user.state = false;
}
{
    let client = {
        id: 100,
        username: "Elzero",
        active: true,
        discount: 10,
        getPrice(price) {
            return price - this.discount;
        }
    };
    console.log(`Client Id Is ${client.id}`);
    console.log(`Client Name Is ${client.username}`);
    console.log(`Client Has Dicount ${client.discount}`);
    console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
}
{
    let creature = {
        title: "Superman",
        weight: 100,
        age: 500,
        canFly: true,
        bodyType: "Iron",
        origin: "Krypton"
    };
    console.log(creature);
}
{
    class Player {
        constructor(fname, lname, level, vip) {
            this.fname = fname;
            this.lname = lname;
            this.level = level;
            this.vip = vip;
        }
        details() {
            return `${this.vip ? `VIP ${this.fname}` : this.fname} , Type Is ${this.lname} Level Is ${this.level}`;
        }
    }
    let player1 = new Player("Osama", "Mage", 90, true);
    let player2 = new Player("Shady", "Archer", "85", false);
    let player3 = new Player("Amr", "Fighter", 50, true);
    let player4 = new Player("Mahmoud", "Assassin", 77);
    console.log(player1.details());
    console.log(player2.details());
    console.log(player3.details());
    console.log(player4.details());
}
{
    class Shorten {
        constructor(id, username, title) {
            this.id = id;
            this.username = username;
            this.title = title;
        }
    }
    let tester = new Shorten(100, "Elzero", "Developer");
    console.log(tester.id);
    console.log(tester.username);
}
{
    class Show {
        constructor(_title) {
            this._title = _title;
        }
        get title() {
            return this._title;
        }
        set title(value) {
            this._title = value;
        }
    }
    let tester = new Show("Elzero");
    console.log(tester.title);
    tester.title = "Osama";
    console.log(tester.title);
}
{
    class Player {
        constructor(id, title, level) {
            this.id = id;
            this.title = title;
            this.level = level;
        }
        logIn() {
            console.log("Logged In");
        }
        logOut(msg) {
            console.log(`Logged Out, ${msg}`);
        }
    }
    let player1 = new Player(100, "Elzero", 95);
    console.log(player1.id);
    console.log(player1.title);
    console.log(player1.level);
    player1.logIn();
    player1.logOut("Good Bye");
}
//# sourceMappingURL=assignments-lessons-from-22-to-31.js.map