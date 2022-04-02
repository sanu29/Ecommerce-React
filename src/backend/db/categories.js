
import { v4 as uuid } from "uuid";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "dairy",
    image : "https://instantgrocery.netlify.app/assets/images/dairy.jpg",
    description:
      "This category contains all the dairy products",
  },
  {
    _id: uuid(),
    categoryName: "staples",
    image : "https://instantgrocery.netlify.app/assets/images/staples.jpg",
    description:
      "This category contains all the pulses and dals",
  },
  {
    _id: uuid(),
    categoryName: "vegetables",
    image : "https://instantgrocery.netlify.app/assets/images/hero.jpg",
    description:
      "This category contains all vegetables",
  },
  {
    _id: uuid(),
    categoryName: "fruits",
    image : "https://instantgrocery.netlify.app/assets/images/fruit.jpg",
    description:
      "This category contains all Fruits",
  },
  {
    _id: uuid(),
    categoryName: "snacks",
    image : "https://instantgrocery.netlify.app/assets/images/snaks.jpg",
    description:
      "This category contains all snacks",
  },
  {
    _id: uuid(),
    categoryName: "sprouts",
    image : "https://instantgrocery.netlify.app/assets/images/sprouts.jpg",
    description:
      "This category contains all meatandchicken",
  },
  {
    _id: uuid(),
    categoryName: "dryfruits",
    image : "https://instantgrocery.netlify.app/assets/images/dry-fruit.jpg",

    description:
      "This category contains all dryfruits",
  },
  {
    _id: uuid(),
    categoryName: "spices",
    image : "https://instantgrocery.netlify.app/assets/images/spices.jpg",
    description:
      "This category contains all spices",
  },
  {
    _id: uuid(),
    categoryName : 'meat and chicken',
    image : "https://instantgrocery.netlify.app/assets/images/chicken.jpg",
    description : "this category will contain all the fresh Meat, Chicken and Eggs"
  }
];
