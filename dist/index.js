"use strict";
// let a =25;
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        //   public name: string;
        //   public price: number;
        //   public stock: number;
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
    }
}
const p1 = new Product("Mackbook", 2000, 20);
