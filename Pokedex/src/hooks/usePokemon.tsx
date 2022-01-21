import React, { useEffect, useState } from "react";
import { PokemonApi } from "../api/PokemonApi";
import { PokemonDetail } from "../interfaces/PokemonInterfaces";

export const usePokemon = ( id: String ) => {
    const [isLoading , setIsLoading] = useState(true);
    const [pokemon , setPokemon] = useState<PokemonDetail>({} as PokemonDetail);
    const loadPokemon = async() => {
        const response = await PokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${ id }`);
        setPokemon( response.data );
        setIsLoading(false);
    }

    useEffect( () => {
        loadPokemon();
    } , []);


   return{
       isLoading ,
       pokemon
   }
}