import React from "react";
import { Image, Text , View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemonPag } from "../hooks/usePokemonPag";
import { styles } from "../theme/appTheme";

export const HomeView = () => {

    const { top } = useSafeAreaInsets();
    usePokemonPag();

    return (
        <>
            <Image
                source={ require('../img/pokebola.png') }
                style={ styles.pokebolaBG }
            />

            <Text style={{ 
                ...styles.title,
                ...styles.globalMargin ,
                top: top + 20,
             }}>Pokédex</Text>
        </>
    )
}