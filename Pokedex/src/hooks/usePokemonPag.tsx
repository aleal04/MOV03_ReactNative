import { useEffect, useRef, useState } from "react";
import { PokemonApi } from "../api/PokemonApi";
import { PokemonPaginatedResponse, Result, SimplePokemon } from "../interfaces/PokemonInterfaces";


export const usePokemonPag = () => {
    const [ simplePokemonList , setSimplePokemonList ] = useState<SimplePokemon[]>([]);
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

    const loadPokemons = async() => {
        const response = await PokemonApi.get<PokemonPaginatedResponse>( nextPageUrl.current );
        nextPageUrl.current = response.data.next;
        mapPokemonListToSimplePokemon(response.data.results);
    }

    const mapPokemonListToSimplePokemon = ( pokemonList: Result[] ) => {
        pokemonList.forEach( poke => console.log(poke.url) );
    }

    useEffect(() => {
        loadPokemons();
    } , []);

    return {
        simplePokemonList
    }
}