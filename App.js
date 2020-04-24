import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

export default class App extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.welcome}>Iniciando o mains!!!</Text>
          <Text style={styles.instructions}>
            tamanho da grade:{params.getRowAmount()}x{params.getColumnsAmaunt()}
          </Text>
          <Field />
          <Field opened />
          <Field opened nearMines={1} />
          <Field opened nearMines={2} />
          <Field opened nearMines={4} />
          <Field opened nearMines={6} />
          <Field mined />
          <Field mined opened />
          <Field mined opened exploded />
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
