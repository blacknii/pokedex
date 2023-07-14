import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const index = 0;
const range = 30;
const start = 0;
const end = 100;
const types: string[] = ["fire"];
const isFilterActive = false;

const typeQuery = (type: string) => `{
    pokemon_v2_pokemontypes: {
      pokemon_v2_type: { name: { _eq: "${type}" } }
    }
  }`;

const fetchPokemons = () => {
  const query = `{
    pokemon_v2_pokemon(
      where: {
        ${
          isFilterActive
            ? `id: { _gte: ${start}, _lte: ${end} }`
            : `id: { _gte: 0}`
        }
        _and: [
          ${types.map((type) => typeQuery(type)).join(", ")}
        ]
      }
      limit: ${range}
      offset: ${index * range}
    ) {
      id
      name
      pokemon_v2_pokemontypes {
        slot
        pokemon_v2_type {
          id
          name
        }
      }
    }
  }
  `;

  return axios.post("https://beta.pokeapi.co/graphql/v1beta", { query });
};

export const usePokemonsData = () => {
  const { isLoading, data } = useQuery(["pokemons"], fetchPokemons);

  return { isLoading, data };
};
