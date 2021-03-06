import React from "react";
import { StyleSheet, Text , View , TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Tabs1";
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FadeInImage } from "../components/FadeInImage";
import { usePokemon } from "../hooks/usePokemon";
import { PokemonDetails } from "../components/PokemonDetails";

interface Props extends  StackScreenProps<RootStackParams , 'PokemonView'>{};

export const PokemonView = ( { navigation , route }: Props ) => {
    
    const { simplePokemon , color} = route.params;
    const { id , name , picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const { isLoading , pokemon } = usePokemon( id );

    return (
        <View style={{ flex: 1 }}>
            <View style={{ 
                ...styles.headerPokeContainer ,
                backgroundColor: color ,
            }}>
                <TouchableOpacity
                onPress={ () => navigation.pop() }
                    activeOpacity={0.8}
                    style={{ 
                        ...styles.backButton ,
                        top: top + 5,
                     }}
                >
                    <Icon
                        name="arrow-back-outline"
                        color="white"
                        size={ 35 }
                    />
                </TouchableOpacity>

                <Text
                    style={{ 
                        ...styles.pokemonName ,
                        top: top + 40
                     }}
                >
                    { name + '\n' } # { id }
                </Text>

                <Image
                    source={ require('../img/pokebola-blanca.png') }
                    style={{ ...styles.pokebola }}
                />

                <FadeInImage 
                    uri={ picture }
                    style={
                        styles.pokemonImage
                    }
                />
                
            </View>
            {
                isLoading ? (
                    <View style={ styles.loadingIndicator }>
                        <ActivityIndicator
                            color={ color }
                            size={50}
                        />
                    </View>
                ) :
                <PokemonDetails pokemon={ pokemon }/>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    headerPokeContainer:{
        height: 350 , 
        zIndex:999,
        alignItems: 'center',
        
    },
    backButton:{
        position:'absolute',
        left:20 ,
    },
    pokemonName:{
        color: 'white',
        fontSize: 40 , 
        alignSelf: 'flex-start' , 
        left: 20 , 
    },
    pokebola:{
        width: 200 ,
        height: 200 , 
        bottom: -50,
        opacity: 0.5,
    },
    pokemonImage:{
        width: 200 ,
        height: 200 , 
        position: 'absolute',
        bottom: -10 ,
    },
    loadingIndicator:{
        flex: 1,
        justifyContent: 'center' ,
        alignItems: 'center'
    }
})