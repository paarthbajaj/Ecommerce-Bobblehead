import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Marvel",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "DC",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "Anime",
    description: "xyz",
  },
  {
    _id: uuid(),
    categoryName: "Football",
    description: "xyz",
  },
  {
    _id: uuid(),
    categoryName: "Keychains",
    description: "xyz",
  },
  {
    _id: uuid(),
    categoryName: "Pokemons",
    description: "xyz",
  },
];
