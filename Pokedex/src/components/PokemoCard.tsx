import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Text, View , TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";

import ImageColors from 'react-native-image-colors'

import { SimplePokemon } from "../interfaces/PokemonInterfaces";
import { FadeInImage } from "./FadeInImage";

const windowWidth = Dimensions.get('window').width;

interface Props{
    pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {

    const [bgColor , setBgColor] = useState( 'grey' );
    const isMounted = useRef(true);
    const navigation = useNavigation();
    
    useEffect(() => {
        ImageColors.getColors(pokemon.picture , { fallback: 'grey' })
        .then( colors => {

            if ( !isMounted.current ) return;

            if(colors.platform === 'android'){
                setBgColor(colors.dominant || 'grey')
            }
            else{
                setBgColor( colors.background || 'grey' )
            }
            
        });

        return() => {
            isMounted.current = false;
        }
    } , []);

    return(
         <TouchableOpacity
            activeOpacity={0.9}
            onPress={ 
                () => navigation.navigate('PokemonView' , { simplePokemon: pokemon , color: bgColor })  
            }
        >
            <View style={{ 
                ...styles.cardContainer ,
                width: windowWidth * 0.4 ,
                backgroundColor: bgColor ,
             }}>
            
                <View>
                    <Text style={ styles.name }>
                        { pokemon.name }
                        { '\n#' + pokemon.id }
                    </Text>
                </View>

                <View style={ styles.pokebolaContainer }>
                    <Image
                        source={ require('../img/pokebola-blanca.png') }
                        style={ styles.pokebola }
                    />
                </View>

                <FadeInImage
                    uri={ pokemon.picture }
                    style={ styles.pokemonImage }
                />

            </View>
         </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal:10,
        height:120,
        width: 160 ,
        marginBottom:25 ,
        borderRadius:10 ,
        
    },
    name:{
        color: 'white' ,
        fontSize: 20 ,
        fontWeight: 'bold',
        top: 20 ,
        left:10 ,
    },
    pokebola:{
        width:100 ,
        height: 100,
        position: 'absolute' , 
        bottom: -25,
        right:-25,
    },
    pokemonImage:{
        width:90 ,
        height:90,
        position:'absolute',
        right:-7 , 
        bottom: -5
    },
    pokebolaContainer:{
        width:100 ,
        height:100,
        position: 'absolute' , 
        right:0 , 
        bottom: 0 ,
        overflow: 'hidden' ,
        opacity:0.5,
    }
})