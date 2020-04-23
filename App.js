import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import params from './src/params';

export default class App extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.welcome}>Iniciando o mains!!!</Text>
          <Text style={styles.instructions}>
            tamanho da grade:{params.getRowAmount()}x{params.getColumnsAmaunt()}
          </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
});
