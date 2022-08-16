const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

class Vegetable{
    constructor(obj){
        this.type = "Vegetable";
        this.seasonKoef = 1.3;
        this.season = obj.season;
        this.name = obj.name;
        this.icon = obj.icon;
        this.price = obj.price;
    }

    getPrice(){
        return this.season ? this.seasonKoef * this.price : this.price;
    }

    getInfo(){
        return `Type: Vegetable. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.price}  ${this.season === true ? 'Season: true':''}`;
    }
}

let newVegetables = vegetables.map(item => new Vegetable(item));

let info = newVegetables.map(item => item.getInfo());

document.write(`<ul>
    <li>${info[0]}</li>
    <li>${info[1]}</li>
    <li>${info[2]}</li>
</ul>`);


