import { v4 as uuid } from "uuid";
import { almonds, anjeer, apple, bananachips, bread, bringal, brownchana, butter, capsicum, cardamom, chana, chanadal, chashew, cheese, cheeseballs, chicken, chickendrum, chickenKheema, chickenmasala, chilie, chocolate, cookie, curd, dates, eggs, fish, grapes, greenpeas, gulabjamun, kitkat, kurkure, lays, makhana, mango, masoor, masoordal, matki, milk, mixdal, mixedsprouts, momos, moong, moongdal, Nachos, nuggets, oats, onion, orange, paneermasala, pav, pavbhajimasala, peanuts, pista, pomegranate, potato, puff, rajma, rasins, redcapsicum, redchilipowder, sidmango, strawberry, sweetlime, tomatoes, turmeric, urad, walnut, watermellon } from "../../images/Images";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Sinduri Mangoes",
    image : sidmango,
    price: 220,
    quantity : "kg",
    categoryName: "fruits",
    rating : 5,
  }  ,
 
  {
    _id: uuid(),
    title: "cheese",
    image : cheese,
    price: 120,
    quantity : "500grms",
    categoryName: "dairy",
    rating : 3,
  }  ,
  {
    _id: uuid(),
    title: "Cheese Balls",
    image : cheeseballs,
    price: 120,
    quantity : "500grms",
    categoryName: "snacks",
    rating : 5,
  },
  {
    _id: uuid(),
    title: "Chicken",
    image : chicken,
    price: 220,
    quantity : "kg",
    categoryName: "nonveg",
    rating : 5,
  }  ,
  {
    _id: uuid(),
    title: "Pomegranate",
    image : pomegranate,
    price: 73,
    quantity : "kg",
    categoryName: "fruits",
    rating : 4,
  },
  {
    _id: uuid(),
    title: "Chicken Drum",
    image : chickendrum,
    price: 250,
    quantity : "kg",
    categoryName: "nonveg",
    rating : 5
  }  ,
  {
    _id: uuid(),
    title: "Tomatoes",
    image : tomatoes,
    price: 26,
    quantity : "kg",
    categoryName: "vegetables",
    rating : 3,
  },
  {
    _id: uuid(),
    title: "Eggs",
    image : eggs,
    price: 30,
    quantity : "6pc",
    categoryName: "nonveg",
    rating : 4,
  }  ,
  {
    _id: uuid(),
    title: "Chicken Kheema",
    image : chickenKheema,
    price: 270,
    quantity : "kg",
    categoryName: "nonveg",
    rating : 5,
  }  ,
  {
    _id: uuid(),
    title: "Chicken Masala",
    image : chickenmasala,
    price: 72,
    quantity : "packet",
    categoryName: "spices",
    rating : 2,
  }  ,
  {
    _id: uuid(),
    title: "Chillie",
    image : chilie,
    price: 28,
    quantity : "500grms",
    categoryName: "vegetables",
    rating : 3,
  },
  {
    _id: uuid(),
    title: "Chocolate",
    image : chocolate,
    price: 160,
    quantity : "packet",
    categoryName: "dairy",
    rating : 5,
  }  ,
  {
    _id: uuid(),
    title: "Cookie",
    image : cookie,
    price: 30,
    quantity : "packet",
    categoryName: "snacks",
    rating : 5,
  }  ,
  {
    _id: uuid(),
    title: "Curd",
    image : curd,
    price: 120,
    quantity : "500ml",
    categoryName: "dairy",
    rating : 5
  }  ,
  {
    _id: uuid(),
    title: "dates",
    image : dates,
    price: 200,
    quantity : "kg",
    categoryName: "dryfruits",
    rating : 4
  }  ,

    {
    _id: uuid(),
    title: "Fish",
    image : fish,
    price: 320,
    quantity : "kg",
    categoryName: "nonveg",
    rating : 3,
  }  ,
  {
    _id: uuid(),
    title: "Grapes",
    image : grapes,
    price: 50,
    quantity : "kg",
    categoryName: "fruits",
    rating : 2,
  }  ,
    {
    _id: uuid(),
    title: "Green Peas",
    image : greenpeas,
    price: 30,
    quantity : "kg",
    categoryName: "vegetables",
    rating : 1,
  },
    {
    _id: uuid(),
    title: "Gulab Jamun",
    image : gulabjamun,
    price: 250,
    quantity : "500grms",
    categoryName: "snacks",
    rating : 5,
  }  ,
    {
    _id: uuid(),
    title: "Kitkat",
    image : kitkat,
    price: 50,
    quantity : "packet",
    categoryName: "snacks",
    rating : 4,
  }  ,
    {
    _id: uuid(),
    title: "Kurkure",
    image : kurkure,
    price: 30,
    quantity : "packet",
    categoryName: "snacks",
    rating : 3,
  }  ,
    {
    _id: uuid(),
    title: "Lays",
    image : lays,
    price: 30,
    quantity : "packet",
    categoryName: "snacks",
    rating : 3,
  }  ,
    {
    _id: uuid(),
    title: "Makhana",
    image : makhana,
    price: 500,
    quantity : "500grms",
    categoryName: "dryfruits",
    rating : 1,
  }  ,
    {
    _id: uuid(),
    title: "Mango",
    image : mango,
    price: 120,
    quantity : "kg",
    categoryName: "fruits",
    rating : 5,
  }  ,

    {
    _id: uuid(),
    title: "Masoor Dal",
    image : masoordal,
    price: 80,
    quantity : "kg",
    categoryName: "staples",
    rating : 2,
  }  ,
  {
    _id: uuid(),
    title: "Chashew",
    image : chashew,
    price: 560,
    quantity : "500grms",
    categoryName: "dryfruits",
    rating : 4,
  }  ,
  {
    _id: uuid(),
    title: "Matki",
    image : matki,
    price: 30,
    quantity : "250grms",
    categoryName: "sprouts",
    rating : 3,
  },
  {
    _id: uuid(),
    title: "masoor",
    image : masoor,
    price: 72,
    quantity : "kg",
    categoryName: "staples",
    rating : 2,
  }  ,
    {
    _id: uuid(),
    title: "Milk",
    image : milk,
    price: 25,
    quantity : "500ml",
    categoryName: "dairy",
    rating : 4,
  }  ,  
  {
    _id: uuid(),
    title: "Mix dal",
    image : mixdal,
    price: 102,
    quantity : "kg",
    categoryName: "staples",
    rating : 5,
  },
    {
    _id: uuid(),
    title: "Mixed Sprouts",
    image : mixedsprouts,
    price: 112,
    quantity : "500grms",
    categoryName: "sprouts",
    rating : 1,
  }  ,
  {
    _id: uuid(),
    title: "Momos Mix",
    image : momos,
    price: 110,
    quantity : "packet",
    categoryName: "snacks",
    rating : 4,
  }  ,
    {
    _id: uuid(),
    title: "Moong",
    image : moong,
    price: 45,
    quantity : "500grms",
    categoryName: "staples",
    rating : 2,
  },
    {
    _id: uuid(),
    title: "Moong Dal",
    image : moongdal,
    price: 72,
    quantity : "kg",
    categoryName: "staples",
    rating : 4,
  },
    {
    _id: uuid(),
    title: "Nachos",
    image : Nachos,
    price: 30,
    quantity : "packet",
    categoryName: "snacks",
    rating : 5,
  },
  {
    _id: uuid(),
    title: "Nuggets",
    image : nuggets,
    price: 60,
    quantity : "packet",
    categoryName: "snacks",
    rating : 5,
  },
    {
    _id: uuid(),
    title: "Oats Meal",
    image : oats,
    price: 42,
    quantity : "packet",
    categoryName: "snacks",
    rating : 1,
  },
    {
    _id: uuid(),
    title: "Onion",
    image : onion,
    price: 30,
    quantity : "kg",
    categoryName: "vegetables",
    rating : 3,
  },
    {
    _id: uuid(),
    title: "Orange",
    image : orange,
    price: 50,
    quantity : "kg",
    categoryName: "fruits",
    rating : 2,
  },
  {
    _id: uuid(),
    title: "Paneer Masala",
    image : paneermasala,
    price: 30,
    quantity : "packet",
    categoryName: "spices",
    rating : 1,
  },
  {
    _id: uuid(),
    title: "Pav",
    image : pav,
    price: 22,
    quantity : "packet",
    categoryName: "dairy",
    rating : 4,
  },
  {
    _id: uuid(),
    title: "Pav Bhaji Masala",
    image : pavbhajimasala,
    price: 47,
    quantity : "packet",
    categoryName: "spices",
    rating : 3,
  },
  {
    _id: uuid(),
    title: "Peanuts",
    image : peanuts,
    price: 80,
    quantity : "kg",
    categoryName: "staples",
    rating : 4,
  },
 
    {
    _id: uuid(),
    title: "Pista",
    image : pista,
    price: 620,
    quantity : "kg",
    categoryName: "dryfruits",
    rating : 5,
  },
    {
    _id: uuid(),
    title: "Potato",
    image : potato,
    price: 38,
    quantity : "kg",
    categoryName: "vegetables",
    rating : 4,
  },
    {
    _id: uuid(),
    title: "Cheese Puffcorn",
    image : puff,
    price: 30,
    quantity : "packet",
    categoryName: "snacks",
    rating : 1,
  },
  {
    _id: uuid(),
    title: "Rajma",
    image : rajma,
    price: 72,
    quantity : "500grms",
    categoryName: "staples",
    rating : 4,
  },
    {
    _id: uuid(),
    title: "Rasins",
    image : rasins,
    price: 660,
    quantity : "kg",
    categoryName: "dryfruits",
    rating : 4,
  },
    {
    _id: uuid(),
    title: "Red capsicum",
    image : redcapsicum,
    price: 37,
    quantity : "kg",
    categoryName: "vegetables",
    rating : 2,
  },
  {
    _id: uuid(),
    title: "Red Chili Powder",
    image : redchilipowder,
    price: 49,
    quantity : "packet",
    categoryName: "spices",
    rating : 3,
  },
    {
    _id: uuid(),
    title: "Strawberry",
    image : strawberry,
    price: 250,
    quantity : "500grms",
    categoryName: "fruits",
    rating : 1,
  },
    {
    _id: uuid(),
    title: "Sweet Lime",
    image : sweetlime,
    price: 40,
    quantity : "kg",
    categoryName: "fruits",
    rating : 2,
  },

    {
    _id: uuid(),
    title: "Turmeric",
    image : turmeric,
    price: 50,
    quantity : "packet",
    categoryName: "spices",
    rating : 4,
  },
    {
    _id: uuid(),
    title: "Urad",
    image : urad,
    price: 68,
    quantity : "kg",
    categoryName: "staples",
    rating : 3,
  },
    {
    _id: uuid(),
    title: "Walnut",
    image : walnut,
    price: 720,
    quantity : "kg",
    categoryName: "dryfruits",
    rating : 3,
  },
    {
    _id: uuid(),
    title: "WaterMellon",
    image : watermellon,
    price: 38,
    quantity : "kg",
    categoryName: "fruits",
    rating : 5,
  }
  ,
  {
    _id: uuid(),
    title: "Almonds",
    image : almonds,
    price: 500,
    quantity : "250grm",
    categoryName: "dryfruits",
    rating : 2,
  }  ,
  {
    _id: uuid(),
    title: "Anjeer",
    image : anjeer,
    price: 500,
    quantity : "250grm",
    categoryName: "dryfruits",
    rating : 3,
  },
  {
    _id: uuid(),
    title: "Apple",
    image : apple,
    price: 100,
    quantity : "1kg",
    categoryName: "fruits",
    rating : 5,
  },
  {
    _id: uuid(),
    title: "Banana Chips",
    image : bananachips,
    price: 100,
    quantity : "500grms",
    categoryName: "snacks",
    rating : 3,
  }  ,
  {
    _id: uuid(),
    title: "Bread",
    image : bread,
    price: 40,
    quantity : "packet",
    categoryName: "dairy",
    rating : 2,
  },
  {
    _id: uuid(),
    title: "Bringal",
    image : bringal,
    price: 30,
    quantity : "kg",
    categoryName: "vegetables",
    rating : 1,
  }  ,
  {
    _id: uuid(),
    title: "brownchana",
    image : brownchana,
    price: 100,
    quantity : "250grms",
    categoryName: "sprouts",
    rating : 2,
  },
  {
    _id: uuid(),
    title: "butter",
    image : butter,
    price: 250,
    quantity : "500grms",
    categoryName: "dairy",
    rating : 5,
  }  , 
  {
    _id: uuid(),
    title: "Capsicum",
    image : capsicum,
    price: 50,
    quantity : "kg",
    categoryName: "vegetables",
    rating : 5,

  }  ,
  {
    _id: uuid(),
    title: "Cardamom",
    image : cardamom,
    price: 500,
    quantity : "250grms",
    categoryName: "spices",
    rating : 4,
  }  ,
  {
    _id: uuid(),
    title: "Chana",
    image : chana,
    price: 100,
    quantity : "500grms",
    categoryName: "staples",
    rating : 2,
  }  ,
  {
    _id: uuid(),
    title: "Chanadal",
    image : chanadal,
    price: 80,
    quantity : "kg",
    categoryName: "staples",
    rating : 3,
  } 
];
