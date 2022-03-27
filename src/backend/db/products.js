import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Strawberry",
    image : "",
    price: "100",
    quantity : "250grm",
    categoryName: "fruit",
  },
  {
    _id: uuid(),
    title: "Carrot",
    image : "",
    price: "35",
    quantity : "kg",
    categoryName: "vegetable",
  },
  {
    _id: uuid(),
    title: "Doritos",
    image : "",
    price: "35",
    quantity : "Packet",
    categoryName: "snacks",
  },
  {
    _id: uuid(),
    title: "Dal",
    image : "",
    price: "76",
    quantity : "kg",
    categoryName: "staples",
  },
  {
    _id: uuid(),
    title: "Eggs",
    image : "",
    price: "150",
    quantity : "dozen",
    categoryName: "meatandchicken",
  },
  {
    _id: uuid(),
    title: "Almonds",
    image : "",
    price: "500",
    quantity : "Kg",
    categoryName: "dryfruits",
  },
  {
    _id: uuid(),
    title: "Cardomom",
    image : "",
    price: "250",
    quantity : "Kg",
    categoryName: "Spices",
  },

];
