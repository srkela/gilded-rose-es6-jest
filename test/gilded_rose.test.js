const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should return passed name", function() {
    const gildedRose = new Shop([new Item("Sulfuras", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras");
    expect(items[0].sellIn).toBe(-1);
  });
  it("should quality of common item decrease by 1, sellIn decrease by 1", function() {
    const gildedRose = new Shop([new Item("Common Brie", 8, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
    expect(items[0].sellIn).toBe(7);
  });
  it("should quality of common item decrease by 2, sellIn decrease by one", function() {
    const gildedRose = new Shop([new Item("Common Brie", -1, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5);
    expect(items[0].sellIn).toBe(-2);
  });
  it("should quality of Aged Brie  increase by 1, sellIn decrease by 1", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(9);

  });
  it("should quality of Aged Brie  remain 50, sellIn decrease by one", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 8, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(7);
  });
  it("should quality of Sulfuras quality remain 80, sellIn decrease by one", function() {
    const gildedRose = new Shop([new Item("Sulfuras", 15, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(14);
  });
  it("should quality of Backstage passes increase by 1 sellIn decrease by one", function() {
    const gildedRose = new Shop([new Item("Backstage passes", 15, 15)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(16);
    expect(items[0].sellIn).toBe(14);
  });
  it("should quality of Backstage passes increase by 2 sellIn decrease by one", function() {
    const gildedRose = new Shop([new Item("Backstage passes", 8, 15)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(17);
    expect(items[0].sellIn).toBe(7);
  });
  it("should quality of Backstage passes increase by 3 sellIn decrease by one", function() {
    const gildedRose = new Shop([new Item("Backstage passes", 2, 15)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
    expect(items[0].sellIn).toBe(1);
  });
  it("should quality of Backstage passes  set to 0 sellIn decrease by one", function() {
    const gildedRose = new Shop([new Item("Backstage passes", -1, 15)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-2);
  });
  it("should quality of Conjured decrease by 2 sellIn decrease by one", function() {
    const gildedRose = new Shop([new Item("Conjured", 10, 9)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(7);
    expect(items[0].sellIn).toBe(9);
  });
  it("should quality of Conjured decrease by 4 sellIn decrease by one", function() {
    const gildedRose = new Shop([new Item("Conjured", -2, 9)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5);
    expect(items[0].sellIn).toBe(-3);
  });
});
