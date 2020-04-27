import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import createMineBoard from './src/functions';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmaunt = () => {
    //vai caucular o percentual o total de minas que está dentro do tabuleiro
    const rows = params.getRowAmount();
    const columns = params.getColumnsAmaunt();
    return Math.ceil(rows * columns * params.difficultLevel);
  };

  createState = () => {
    const columns = params.getColumnsAmaunt();
    const rows = params.getRowAmount();
    return {
      // board: createMineBoard(rows, columns, this.minesAmaunt()),
    };
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.welcome}>Iniciando o mains!!!</Text>
          <Text style={styles.instructions}>
            tamanho da grade:{params.getRowAmount()}x{params.getColumnsAmaunt()}
          </Text>
          <View style={styles.board}>
            <MineField board={this.state.board} />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
