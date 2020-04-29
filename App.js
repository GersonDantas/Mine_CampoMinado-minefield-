import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  wonGame,
  showMines,
  hadExplosion,
  invertFlag,
  flagUsed,
} from './src/functions';

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

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const wow = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('você Perdeu', 'Duvido tentar de novo...');
    }
    if (wow) {
      Alert.alert('Parabeeeeeens!!!', 'Você ganhou!!!');
    }

    this.setState({board, lost, wow});
  };

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const wow = wonGame(board);

    if (wow) {
      Alert.alert('Parabeeeeeens!!!', 'Você ganhou!!!');
    }

    this.setState({board, wow});
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Header
            flagsLeft={this.minesAmount() - flagUsed(this.state.board)}
            onNewGame={() => this.setState(this.createState())}
          />
          <View style={styles.board}>
            <MineField
              board={this.state.board}
              onOpenField={this.onOpenField}
              onSelect={this.onSelectField}
            />
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
