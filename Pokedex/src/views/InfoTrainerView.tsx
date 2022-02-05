import React from 'react'
import { RootStackParams } from "../navigation/Tabs1";
import Icon from "react-native-vector-icons/Ionicons";
import { StackScreenProps } from "@react-navigation/stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props extends  StackScreenProps<RootStackParams , 'TrainerView'>{};

export const InfoTrainerView = ( { navigation , route }: Props ) => {

    const { top } = useSafeAreaInsets();
    const  infoTrainer  = route.params.infoTrainer;

    return (
        <View style={{ flex: 1 }}>
            <View style={{ 
                    ...styles.headerPokeContainer
                }}
            >

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
                        
                        size={ 35 }
                    />
                </TouchableOpacity>

                <Text
                    style={{ 
                        ...styles.title ,
                        top: top + 40
                    }}
                >Informacion de entrenador</Text>

            </View>

            <View style={{ marginLeft: 20 , marginRight: 20 , marginTop: 20 , justifyContent: 'center' }}>
                <Text style={styles.titleInfoList}>Nombre</Text>
                <Text style={styles.infoList}>{ infoTrainer.name }</Text>
            </View>

            <View style={{ marginLeft: 20 , marginRight: 20 , marginTop: 20 , justifyContent: 'center' }}>
                <Text style={styles.titleInfoList}>Lugar de residencia</Text>
                <Text style={styles.infoList}>{ infoTrainer.address }</Text>
            </View>

            <View style={{ marginLeft: 20 , marginRight: 20 , marginTop: 20 , justifyContent: 'center' }}>
                <Text style={styles.titleInfoList}>Numero de telefono</Text>
                <Text style={styles.infoList}>{ infoTrainer.phone }</Text>
            </View>

            <View style={{ marginLeft: 20 , marginRight: 20 , marginTop: 20 , justifyContent: 'center' }}>
                <Text style={styles.titleInfoList}>Fecha de cumpleanos</Text>
                <Text style={styles.infoList}>{ infoTrainer.birthdayDate.toString() }</Text>
            </View>

            
            
        </View>
    )
}

const styles = StyleSheet.create({
    headerPokeContainer:{
        height : 350 , 
        zIndex : 999,
        alignItems: 'center',
        
    },
    backButton:{
        position:'absolute',
        left:20 ,
    },
    title:{
        fontSize: 30, 
        alignSelf: 'flex-start' , 
        left: 20 , 
    },
    infoList:{
        fontSize: 18
    },
    titleInfoList:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})
