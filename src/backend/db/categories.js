import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryImage: "/assets/images/marvel-bobblehead.jpg",
    categoryName: "Marvel",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryImage: "/assets/images/dc-bobblehead.jpg",
    categoryName: "DC",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryImage: "/assets/images/anime-bobblheads.jpg",
    categoryName: "Anime",
    description: "xyz",
  },
  {
    _id: uuid(),
    categoryImage: "/assets/images/football-bobblehead.jpg",
    categoryName: "Football",
    description: "xyz",
  },
  {
    _id: uuid(),
    categoryImage: "/assets/images/keychain-bobblehead.jpg",
    categoryName: "Keychains",
    description: "xyz",
  },
  {
    _id: uuid(),
    categoryImage: "/assets/images/pokemon-bobblehead.jpg",
    categoryName: "Pokemons",
    description: "xyz",
  },
];
