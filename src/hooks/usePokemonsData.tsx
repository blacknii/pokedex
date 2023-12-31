import { useQuery } from "@tanstack/react-query";
import { regions } from "../data/regions";
import axios from "axios";

const individualRegions = regions.slice(1);

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
  img: string;
}

const query = `{
  pokemon_v2_pokemon {
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

  const generationFilter = (id: number) => {
    return (
      individualRegions.find((gen) => id >= gen.start && id <= gen.end)?.name ||
      "Unknown"
    );
  };

  return response.data.data.pokemon_v2_pokemon.map((pokemon) => ({
    img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${
      pokemon.id < 1000
        ? ("000" + pokemon.id.toString()).slice(-3)
        : pokemon.id.toString()
    }.png`,
    id: pokemon.id,
    name: pokemon.name,
    weight: pokemon.weight,
    height: pokemon.height,
    types: pokemon.pokemon_v2_pokemontypes.map(
      (type) => type.pokemon_v2_type.name
    ),
    generation: generationFilter(pokemon.id),
  }));
};

export const usePokemonsData = (): {
  isLoading: boolean;
  error: Error | null;
  rawPokemons: Pokemon[] | undefined;
} => {
  const {
    isLoading,
    data: rawPokemons,
    error,
  } = useQuery<Pokemon[], Error>(["pokemons"], fetchPokemons);

  return { isLoading, rawPokemons, error };
};
