import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput , TouchableHighlight, View } from 'react-native'

import { useDispatch } from 'react-redux';

import PhoneInput from 'react-native-phone-number-input'
import { AddTrainer } from '../actions/ActionTypes';
import DatePicker from 'react-native-date-picker';

export const ModalTrainerForm = () => {

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    //Values
    const [name , setName] = useState('');
    const [gender , setGender] = useState('');
    const [address , setAddress] = useState('');
    const [phone , setPhone] = useState('');
    const [birthdayDate, setBirthdayDate] = useState(new Date())


    const [open, setOpen] = useState(false)

    const dispatch = useDispatch();

    const addTrainer = () => {
        if( name.length >= 1 && 
            gender.length >= 1 && 
            address.length >= 1 
        ){
            dispatch( AddTrainer( { name , phone , address , gender , birthdayDate } ) );
            setName('');
            setPhone('');
            setAddress('');
            setGender('');

            console.log(birthdayDate);

            Alert.alert( 'Felicidades!' ,'El entrenador fue agregado con exito!');
        }
        else{
            Alert.alert( 'Oops!' ,'El formulario esta incompleto');
        }
    };
    
    return (
        <>
            <View
                style={{ 
                    height:'80%',
                    width:'100%' ,                                
                    alignItems:'center',
                    paddingHorizontal:10 ,
                    
                }}
            >
                
                <View style={ styles.textBackground }>
                    <TextInput
                        style={{ ...styles.inputStyle , width:'100%' }}
                        placeholder="Nombre completo"  
                        autoComplete="off"
                        value={name}
                        onChangeText={ (value) => setName(value) }
                    />
                </View>

                <View style={{ ...styles.textBackground , marginTop: 20}}>
                    <TextInput
                        style={{ ...styles.inputStyle , width:'100%' }}
                        placeholder="Sexo: (M) masculino o (F) femenino"
                        autoComplete="off"  
                        maxLength={1}
                        value={gender}
                        onChangeText={ (value) => setGender(value) }
                    />
                </View>

                <View style={{ ...styles.textBackground , marginTop: 20}}>
                    <TextInput
                        style={{ ...styles.inputStyle , width:'100%' }}
                        placeholder="Lugar de residencia"  
                        autoComplete="off"
                        value={address}
                        onChangeText={ (value) => setAddress(value) }
                    />
                </View>

                <PhoneInput       
                    value={phone}
                    defaultCode="CR"
                    placeholder="12345678"
                    disableArrowIcon={ false }
                    containerStyle={{ marginTop:20 ,  width: "100%" }}
                    onChangeText={ (value) => setPhone(value) }
                />

                <View style={{ marginBottom: 20 , width: "100%" }}>
                    
                
                    <View style={{ marginBottom:5 , width:'100%' }}>
                        <View style={{ ...styles.textBackground , marginTop: 20}}>
                            <TextInput
                                style={{ ...styles.inputStyle}}
                                editable={false}
                                value={birthdayDate.toISOString().substring(0, 10)}
                            />
                        </View>
                    </View>

                    <View style={{ width: "100%" }}>
                        <TouchableHighlight
                            style={styles.submit}
                            onPress={() => setOpen(true)}
                            underlayColor='#fff'>
                            <Text style={{ textAlign:'center' , fontWeight: 'bold' , color: 'white' , fontSize: 15 }}>Seleccione una fecha</Text>
                        </TouchableHighlight>
                    </View>

                    <DatePicker
                        modal
                        open={open}
                        date={birthdayDate}
                        mode="date" 
                        locale="es"
                        onConfirm={(date) => {
                            setOpen(false)
                            setBirthdayDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                        confirmText="Confirmar"
                        cancelText="Cancelar"
                        title="Seleccione una fecha"
                    />
                </View>

                <View style={{ width: "100%"  }}>
                    <TouchableHighlight
                        style={styles.submit}
                        onPress={ addTrainer }
                        underlayColor='#fff'>
                        <Text style={{ textAlign:'center' , fontWeight: 'bold' , color: 'white' , fontSize: 15 }}>Agregar</Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    inputStyle:{
        flex: 1 ,
        fontSize: 18 ,
        top: 1
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

    submit: {
        marginTop: 5,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#e91e63',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
        overflow: 'hidden'
      },
      
});

