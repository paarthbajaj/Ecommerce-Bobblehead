import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Capt. America Bobblehead",
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
    title: "Hulk Bobblehead",
    is_topSeller: "No",
    productImage: "/assets/images/hulk-bobblehead.jpg",
    price: "298",
    categoryName: "Marvel",
  },
  {
    _id: uuid(),
    title: "Spiderman Bobblehead",
    is_topSeller: "No",
    productImage: "/assets/images/spiderman.jpg",
    price: "329",
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
    price: "239",
    categoryName: "Pokemons",
  },
  {
    _id: uuid(),
    title: "Shinchan Bobblehead",
    is_topSeller: "No",
    productImage: "/assets/images/Shinchan-bobblehead.jpg",
    price: "248",
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
    title: "Krillin Bobblehead",
    is_topSeller: "No",
    productImage: "/assets/images/krillin.jpg",
    price: "289",
    categoryName: "Anime",
  },
  {
    _id: uuid(),
    title: "Charizard Bobblehead",
    is_topSeller: "No",
    productImage: "/assets/images/charizard.jpg",
    price: "399",
    categoryName: "Pokemons",
  },
  {
    _id: uuid(),
    title: "Goku Bobblehead Keychain",
    is_topSeller: "Yes",
    productImage: "/assets/images/gokuKeychain.jpg",
    price: "349",
    categoryName: "Keychains",
  },
  {
    _id: uuid(),
    title: "Batman Bobblehead",
    is_topSeller: "No",
    productImage: "/assets/images/batman.jpg",
    price: "328",
    categoryName: "DC",
  },
];
