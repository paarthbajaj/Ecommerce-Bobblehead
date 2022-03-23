import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Captain America Bobblehead",
    is_topSeller: "Yes",
    productImage: "/assets/images/captain-america-bobblehead.jpg",
    price: "299",
    categoryName: "Marvel",
  },
  {
    _id: uuid(),
    title: "Iron Man Bobblehead",
    is_topSeller: "Yes",
    productImage: "/assets/images/ironman-bobblehead.png",
    price: "499",
    categoryName: "Marvel",
  },
  {
    _id: uuid(),
    title: "Ronaldo Bobblehead",
    is_topSeller: "Yes",
    productImage: "/assets/images/roanldo-bobblehead.jpg",
    price: "309",
    categoryName: "Football",
  },
  {
    _id: uuid(),
    title: "Pikachu Bobblehead",
    is_topSeller: "Yes",
    productImage: "/assets/images/pikachu-bobblehead.jpg",
    price: "249",
    categoryName: "Pokemons",
  },
  {
    _id: uuid(),
    title: "Shinchan Bobblehead",
    is_topSeller: "No",
    productImage: "/assets/images/Shinchan-bobblehead.jpg",
    price: "249",
    categoryName: "Anime",
  },
  {
    _id: uuid(),
    title: "Naruto Bobblehead",
    is_topSeller: "Yes",
    productImage: "/assets/images/Naruto-bobblehead.jpg",
    price: "249",
    categoryName: "Anime",
  },
  {
    _id: uuid(),
    title: "Goku Bobblehead Keychain",
    is_topSeller: "Yes",
    productImage: "/assets/images/gokuKeychain.jpg",
    price: "349",
    categoryName: "Keychains",
  },
];
