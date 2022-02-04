import React, { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput , View } from 'react-native'

import { useDispatch } from 'react-redux';

import PhoneInput from 'react-native-phone-number-input'
import { AddTrainer } from '../actions/ActionTypes';

export const ModalTrainerForm = () => {

    //Values
    const [name , setName] = useState('');
    const [gender , setGender] = useState('');
    const [address , setAddress] = useState('');
    const [birthday , setBirthday] = useState(new Date());
    const [phone , setPhone] = useState('');

    const dispatch = useDispatch();

    const addTrainer = () => {
        dispatch( AddTrainer( { name , gender , address  , phone } ) );

        setName('');
        setPhone('');
        setAddress('');
        setGender('');

        Alert.alert( 'Exito...' ,'Entrenador agregado!')
    };
    
    return (
        <>
            <View
                style={{ 
                    height:'90%',
                    width:'100%' ,                                
                    
                    paddingHorizontal:10
                }}
            >

                <TextInput
                    style={{ ...styles.inputStyle , marginTop:20 }}
                    placeholder="Nombre completo"  
                    autoComplete="off"
                    value={name}
                    onChangeText={ (value) => setName(value) }
                />

                <TextInput
                    style={{ ...styles.inputStyle , marginTop:20 }}
                    placeholder="Sexo"
                    autoComplete="off"  
                    value={gender}
                    onChangeText={ (value) => setGender(value) }
                />

                <TextInput
                    style={{ ...styles.inputStyle , marginTop:20 }}
                    placeholder="Lugar de residencia"  
                    autoComplete="off"
                    value={address}
                    onChangeText={ (value) => setAddress(value) }
                />

                <PhoneInput       
                    value={phone}
                    defaultCode="CR"
                    placeholder="12345678"
                    disableArrowIcon={ false }
                    containerStyle={{ marginTop:20 , marginBottom:20 , width: "90%" }}
                    onChangeText={ (value) => setPhone(value) }
                />

                <Button 
                    title="Agregar"
                    onPress={ addTrainer }
                />
                
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    inputStyle:{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)' ,
        paddingHorizontal: 10 ,
        borderRadius: 10 ,
        height: 50
    },
});

