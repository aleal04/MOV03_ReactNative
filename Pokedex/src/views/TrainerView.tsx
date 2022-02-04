import React, { useState } from 'react'

import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles as GlobalStyles } from "../theme/appTheme";
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ModalTrainerForm } from './ModalTrainerForm';


export const TrainerView = () => {

    const { top } = useSafeAreaInsets();

    const data = useSelector(state => state);
    const [showModal , setShowModal] = useState(false);
    const trainers = data.trainerList;
    
    return (
        <View style={styles.container}>

            <View>
                <FlatList
                    contentContainerStyle={{
                        padding: 20
                    }}
                    ListHeaderComponent={(
                        <Text style={{ 
                            ...GlobalStyles.title,
                            top: top + 20,
                            marginBottom: top + 30 ,
                            paddingBottom: 10 ,
                        }}>Entrenadores</Text>
                    )}
                    data={trainers}
                    renderItem={ ({item}) => 
                        <View 
                            style={{ 
                                flexDirection:'row' , padding: 20 , marginBottom: 20 , borderRadius: 12 , 
                                backgroundColor: '#EEEEEE' , borderWidth: 2
                            }}
                        >
                            <Image
                                style={{ width:50 , height:50 , borderRadius:20 }}
                                source={ require('../img/avatar.png') }
                            />

                            <View>
                                <Text style={{ fontSize: 22 , fontWeight: 'bold' , marginLeft:10 }}>{ item.name }</Text>
                                <Text style={{ fontSize: 18 , fontWeight: 'bold' , marginLeft:10 }}>{ item.phone }</Text>
                            </View>

                            
                        </View>
                        
                        
                    }
                />

                
            </View>
            <TouchableOpacity 
                activeOpacity={0.5} 
                style={styles.TouchableOpacityStyle} 
                onPress={ 
                    () => setShowModal(true)
                }
            >
                <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} style={styles.FloatingButtonStyle} />
            </TouchableOpacity>

            <Modal
                animationType="fade"
                visible={ showModal }
                transparent
            >
                <View 
                    style={{ 
                        flex:1 ,
                        backgroundColor: 'rgba(1,1,1, 0.5)',
                        justifyContent:'center',
                        alignItems: 'center', 
                    }}
                >
                    <View
                        style={{ 
                            height:'100%',
                            width:'100%' ,
                            backgroundColor: '#FFFFFF' ,  
                        }}
                    >
                        <View
                            style={{ 
                                height:'10%',
                                width:'100%' ,                                
                                flexDirection: 'row' ,
                                alignItems: 'center' ,
                                justifyContent: 'flex-end' ,
                                paddingHorizontal:10 ,
                         
                            }}
                        >
                         
                            <TouchableOpacity
                                onPress={ () => setShowModal(false) }
                            >
                                <Ionicons
                                    size={ 35 } 
                                    name="close"
                                />
                            </TouchableOpacity>

                        </View>

                        <ModalTrainerForm />

                    </View>
                </View>

            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        border: 1 ,
        height: 50,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
    },
    
    TouchableOpacityStyle:{
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 75,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
});