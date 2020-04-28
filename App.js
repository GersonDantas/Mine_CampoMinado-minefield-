import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import {createMinedBoard} from './src/functions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    //vai caucular o percentual o total de minas que está dentro do tabuleiro
    const cols = params.getColumnsAmaunt();
    const rows = params.getRowAmount();
    return Math.ceil(rows * cols * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmaunt() - 1;
    const rows = params.getRowAmount() - 1;
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
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
    padding: 5,
  },
});
