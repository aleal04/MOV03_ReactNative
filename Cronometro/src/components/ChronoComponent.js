import React, { useState } from 'react';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Cronómetro
        </Text>
        <View style={styles.sectionStyle}>
          <Stopwatch 
            laps 
            msecs 
            start={isStopwatchStart} 
            reset={resetStopwatch}
            options={options} getTime={(time) => {
            }}
          />
          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}>
            <Text style={styles.buttonText}>
              {!isStopwatchStart ? 'Iniciar' : 'Detener'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}>
            <Text style={styles.buttonText}>Resetear</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  sectionStyle: {
    flex: 1,
    marginTop: 40 ,
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 10 ,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

const options = {
  container: {
    backgroundColor: '#FFFFF',
    padding: 5,
    borderRadius: 5,
    width: 300,
    alignItems: 'center',
  },
  text: {
    fontSize: 45,
    color: '#FFF',
    marginLeft: 7,
  },
};
