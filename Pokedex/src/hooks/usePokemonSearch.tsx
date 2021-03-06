import { useEffect, useRef, useState } from "react";
import { PokemonApi } from "../api/PokemonApi";
import { PokemonPaginatedResponse, Result, SimplePokemon } from "../interfaces/PokemonInterfaces";


export const usePokemonSearch = () => {
    const [ isFetching , setIsFetching] = useState(true);
    const [ simplePokemonList , setSimplePokemonList ] = useState<SimplePokemon[]>([]);


    const loadPokemons = async() => {
        const response = await PokemonApi.get<PokemonPaginatedResponse>( 'https://pokeapi.co/api/v2/pokemon?limit=151' );
        mapPokemonListToSimplePokemon( response.data.results );
    }

    const mapPokemonListToSimplePokemon = ( pokemonList: Result[] ) => {

        const newPokemonList: SimplePokemon[] = pokemonList.map( ({ name , url }) => {

            const urlParts = url.split('/');
            const id = urlParts[urlParts.length -2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;

            return { id, picture , name }
            
        });

        setSimplePokemonList( newPokemonList );
        setIsFetching(false);
    }

    useEffect(() => {
        loadPokemons();
    } , []);

    return {
        isFetching ,
        simplePokemonList
    }
}