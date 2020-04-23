import {Dimensions} from 'react-native';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, //proporção do painel superior
  difficultLevel: 0.1, //difilculdade do jogo(quantos -em porcentagem- campos serão preenchidos com minas)
  getColumnsAmaunt() {
    //quantidade das colunas
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blockSize); //retorna a quantidade de blocos por coluna, arredondando pra baixo
  },
  getRowAmount() {
    //quantidade das Linhas
    const totalHeigt = Dimensions.get('window').height;
    const borderHeigt = totalHeigt * (1 - this.headerRatio); // para tirar a proporção do cabeçalho na tela
    return Math.floor(borderHeigt / this.blockSize);
  },
};

export default params;
