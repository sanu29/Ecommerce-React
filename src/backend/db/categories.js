import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "dairy",
    description:
      "This category contains all the dairy products",
  },
  {
    _id: uuid(),
    categoryName: "staples",
    description:
      "This category contains all the pulses and dals",
  },
  {
    _id: uuid(),
    categoryName: "vegetables",
    description:
      "This category contains all vegetables",
  },
  {
    _id: uuid(),
    categoryName: "fruits",
    description:
      "This category contains all Fruits",
  },
  {
    _id: uuid(),
    categoryName: "snacks",
    description:
      "This category contains all snacks",
  },
  {
    _id: uuid(),
    categoryName: "sprouts",
    description:
      "This category contains all meatandchicken",
  },
  {
    _id: uuid(),
    categoryName: "dryfruits",
    description:
      "This category contains all dryfruits",
  },
  {
    _id: uuid(),
    categoryName: "spices",
    description:
      "This category contains all spices",
  },
  {
    _id: uuid(),
    categoryName: "sprouts",
    description:
      "This category contains all sprouts",
  },
];
