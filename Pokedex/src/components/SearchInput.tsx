import React, { useEffect, useState } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedSetValue } from '../hooks/useDebouncedSetValue';

interface Props{
    style?: StyleProp<ViewStyle> ,
    onDebounce: ( value : string ) => void;
}

export const SearchInput = ({ style , onDebounce }: Props ) => {

    const[ textValue , setTextValue ] = useState('');

    const debouncedValue =  useDebouncedSetValue( textValue )

    useEffect(() => {
        onDebounce( debouncedValue );
    }, [ debouncedValue ] );
    

    return (
        <View style={{ ...styles.container , ...style as any }}>
            <View style={ styles.textBackground }>
                <TextInput 
                    placeholder='Ingrese el nombre del pokémon'
                    style={ styles.textInput }
                    autoCapitalize="none"
                    autoCorrect={ false }
                    value={textValue}
                    onChangeText={ setTextValue }
                />
                <Icon
                    name='search-outline'
                    color="grey"
                    size={ 30 }
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        //backgroundColor: 'red'
    },
    textBackground:{
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        paddingHorizontal: 20 ,
        justifyContent: 'center', 
        alignItems: 'center' ,
        flexDirection: 'row' ,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput:{
        flex: 1 ,
        fontSize: 18 ,
        top: 1
    }
});