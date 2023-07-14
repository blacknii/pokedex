import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface PokemonType {
  pokemon_v2_type: {
    name: string;
  };
}

interface PokemonResponse {
  id: number;
  name: string;
  weight: number;
  height: number;
  pokemon_v2_pokemontypes: PokemonType[];
}

interface GraphQLResponse {
  data: {
    pokemon_v2_pokemon: PokemonResponse[];
  };
}

interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: string[];
  generation: string;
}

const index = 0;
const range = 30;
const start = 0;
const end = 100;
const types: string[] = [];
const isFilterActive = false;

const DUMMY_DATA = [
  {
    name: "Kanto",
    start: 1,
    end: 151,
  },
  {
    name: "Johto",
    start: 152,
    end: 251,
  },
  {
    name: "Hoenn",
    start: 252,
    end: 386,
  },
  {
    name: "Sinnoh",
    start: 387,
    end: 493,
  },
  {
    name: "Unova",
    start: 494,
    end: 649,
  },
  {
    name: "Kalos",
    start: 650,
    end: 721,
  },
  {
    name: "Alola",
    start: 722,
    end: 809,
  },
  {
    name: "Galar",
    start: 810,
    end: 905,
  },
  {
    name: "Paldea",
    start: 906,
    end: 1010,
  },
];

const typeQuery = (type: string) => `{
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: { name: { _eq: "${type}" } }
  }
}`;

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
    weight
    height
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
}`;

const fetchPokemons = async (): Promise<Pokemon[]> => {
  const response = await axios.post<GraphQLResponse>(
    "https://beta.pokeapi.co/graphql/v1beta",
    { query }
  );

  return response.data.data.pokemon_v2_pokemon.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    weight: pokemon.weight,
    height: pokemon.height,
    types: pokemon.pokemon_v2_pokemontypes.map(
      (type) => type.pokemon_v2_type.name
    ),
    generation:
      DUMMY_DATA.find((gen) => pokemon.id >= gen.start && pokemon.id <= gen.end)
        ?.name || "Unknown",
  }));
};

export const usePokemonsData = (): {
  isLoading: boolean;
  data: Pokemon[] | undefined;
} => {
  const { isLoading, data } = useQuery<Pokemon[], Error>(
    ["pokemons"],
    fetchPokemons
  );

  return { isLoading, data };
};
