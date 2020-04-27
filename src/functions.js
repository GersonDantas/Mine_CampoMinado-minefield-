const creatBoard = (rows, columns) => {
  return Array(rows).fill(0).map((_, row) => {
      //"_" aqui vai ignorar o elemento do array
      return Array(columns).fill(0).map((_, column) => {
          return {
            //aqui vai retornar uma matriz de objetos. Por exemplo: [[{...},{...}],[{...},{...}],[{},{}]]
            row, //indice da linha
            column, //indice da coluna
            mined: false,
            opened: false,
            nearMines: 0,
            exploded: false,
            flagget: false,
          };
        });
    });
};

const spreadMines = (board, minesAmount) => {
  const rows = board.length;
  const columns = board[0].length; //estou dizendo que vai pegar o tamanho de uma coluna dentro de uma linha
  let minesPlanted = 0;

  while (minesPlanted < minesAmount) {
    // vai rodar até o numero de minas plantadas seja igual ou maior as minas passadas
    const rowsSel = parseInt(Math.random() * rows, 10); //selecionando qual é a linha
    const columnSel = parseInt(Math.random() * columns, 10); //coluna selecionada. Em ", 10)", está doizendo qual a baze(decimal)

    if (!board[rowsSel][columnSel].mined) {
      board[rowsSel][columnSel].mined = true;
      minesPlanted++;
    }
  }
};

const creatMinesBoard = (rows, columns, minesAmount) => {
  const board = creatBoard(rows, columns); //o board vai manipular cada objeto selecionado, dizendo mined or no
  spreadMines(board, minesAmount);
  return board; // já vai retornar o tabuleiro feito, com os objetos minados ou nao
};

export {creatMinesBoard};
