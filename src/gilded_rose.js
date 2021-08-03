class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  
  updateQuality() {
    const updatedItems = []
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === "Aged Brie") {
        if (this.items[i].quality < 50) {
          this.items[i].sellIn = this.items[i].sellIn - 1;
          this.items[i].quality = this.items[i].quality + 1;
        }
        if (this.items[i].quality >= 50) {
          this.items[i].sellIn = this.items[i].sellIn - 1;
          this.items[i].quality = 50;
        }
        updatedItems.push(this.items[i])
      } else if (this.items[i].name === "Sulfuras") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
        this.items[i].quality = 80;
        updatedItems.push(this.items[i])
      } else if (this.items[i].name === "Backstage passes") {
        if (this.items[i].sellIn > 10) {
          this.items[i].sellIn = this.items[i].sellIn - 1;
          this.items[i].quality = this.items[i].quality +1
        } else if (this.items[i].sellIn > 5 && this.items[i].sellIn <= 10) {
          this.items[i].sellIn = this.items[i].sellIn - 1;
          this.items[i].quality = this.items[i].quality +2;
        } else if (this.items[i].sellIn >= 0 && this.items[i].sellIn <= 5) {
          this.items[i].sellIn = this.items[i].sellIn - 1;
          this.items[i].quality = this.items[i].quality +3;          
        } else {
          this.items[i].sellIn = this.items[i].sellIn - 1;
          this.items[i].quality = 0;
        }
        updatedItems.push(this.items[i]);
      } else if (this.items[i].name === "Conjured") {
        if (this.items[i].sellIn >= 0){
          this.items[i].quality = this.items[i].quality -2;
          this.items[i].sellIn = this.items[i].sellIn - 1;
        } else {
          this.items[i].quality = this.items[i].quality -4;
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        if (this.items[i].quality < 0) this.items[i].quality = 0;
        updatedItems.push(this.items[i]);
      } else {
        if ( this.items[i].sellIn >= 0) {
          this.items[i].sellIn = this.items[i].sellIn - 1;
          this.items[i].quality = this.items[i].quality - 1;
        } else {
          this.items[i].sellIn = this.items[i].sellIn - 1;
          this.items[i].quality = this.items[i].quality - 2;
        }
        updatedItems.push(this.items[i]);
      }
    }
    return updatedItems;
  }
}

const commonBrie = new Item("Common Brie", 8, 9)
const commonAle = new Item("Common Ale", 10, 7)
const conjured = new Item("Conjured", 14, 8);
const agedBrie = new Item("Aged Brie", 20, 10);
const sulfuras = new Item("Sulfuras", 8, 80);
const backstagePasses = new Item("Backstage passes", 15, 12);

let inventory

inventory = new Shop([conjured, commonAle, commonBrie, agedBrie, sulfuras, backstagePasses]);

module.exports = {
  Item,
  Shop
}
