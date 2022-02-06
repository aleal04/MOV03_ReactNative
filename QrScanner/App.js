
import React, { Component } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Text, TouchableOpacity } from 'react-native';

class App extends Component {

  state = {
    qr: ""
  }

  onRead = e => {
    this.setState( { qr : e.data } )
  }

  render() {
    return (
      <>
      <QRCodeScanner
        onRead={this.onRead}
        reactivate={true}
        reactivateTimeout={2000}
        topContent={
          <Text >
            Go to{' '}
            <Text>{ this.state.qr }</Text> 
          </Text>
        }
        bottomContent={
          <TouchableOpacity >
            <Text>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      </>
    );
  }
};

export default App;



