/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'; 
import { 
  StyleSheet,
  Text,
  View
} from 'react-native' ;


// import { SimpleButton } from './App/Components/SimpleButton';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to Barter4SME
            </Text>
        
        
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


