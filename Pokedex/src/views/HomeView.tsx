import React from "react";
import { Image, FlatList, ActivityIndicator, Text, View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PokemonCard } from "../components/PokemoCard";
import { usePokemonPag } from "../hooks/usePokemonPag";
import { styles } from "../theme/appTheme";

export const HomeView = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList , loadPokemons } =usePokemonPag();

    return (
        <>
            <Image
                source={ require('../img/pokebola.png') }
                style={ styles.pokebolaBG }
            />

            <View
                style={{ 
                    alignItems: 'center'
                 }}
            >
                <FlatList
                    data={ simplePokemonList }
                    keyExtractor={ (pokemon) => pokemon.id }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }
                    ListHeaderComponent={(
                        <Text style={{ 
                            ...styles.title,
                            ...styles.globalMargin ,
                            top: top + 20,
                            marginBottom: top + 20 ,
                            paddingBottom: 10 ,
                        }}>Pokédex</Text>
                    )}
                    renderItem={ ({ item  }) => (  <PokemonCard pokemon={ item } />)}
                    onEndReached={ loadPokemons }
                    onEndReachedThreshold={ 0.4 }

                    ListFooterComponent={(
                        <ActivityIndicator 
                            style={{ height: 100 }} 
                            size={ 20 }
                            color="grey"
                        />
                    )}
                />
            </View>

            
        </>
    )
}