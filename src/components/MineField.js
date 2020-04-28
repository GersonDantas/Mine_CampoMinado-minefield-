import React from 'react';
import {View, StyleSheet} from 'react-native';
import Field from './Field';

// import { Container } from './styles';

export default props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />; //sempre que eu retornar um array de JSX é melhor colocar a chave, para tornar a busca mais fácil
    });
    return (
      <View key={r} style={{flexDirection: 'row'}}>
        {columns}
      </View>
    );
  });
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    backgroundColor: '#EEE',
  },
});
