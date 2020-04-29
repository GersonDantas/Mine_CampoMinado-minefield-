const creatBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      //"_" aqui vai ignorar o elemento do array
      return Array(columns)
        .fill(0)
        .map((_, column) => {
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

const createMinedBoard = (rows, columns, minesAmount) => {
  const board = creatBoard(rows, columns); //o board vai manipular cada objeto selecionado, dizendo mined or no
  spreadMines(board, minesAmount);
  return board; // já vai retornar o tabuleiro feito, com os objetos minados ou nao
};

const cloneBoard = board => {
  return board.map(rows => {
    return rows.map(field => {
      return {...field};
    });
  });
};

const getNeighbors = (board, row, column) => {
  const neighbors = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];
  rows.forEach(r => {
    columns.forEach(c => {
      const different = r !== row || c !== column;
      const validRow = r >= 0 && r < board.length;
      const validColumn = c >= 0 && c < board[0].length;
      if (different && validColumn && validRow) {
        neighbors.push(board[r][c]);
      }
    });
  });
  return neighbors;
};

const safeNeighborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined;
  return getNeighbors(board, row, column).reduce(safes, true);
};

const openField = (board, row, column) => {
  const field = board[row][column];
  if (!field.opened) {
    field.opened = true;
    if (field.mined) {
      field.exploded = true;
    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach(n =>
        openField(board, n.row, n.column),
      );
    } else {
      const neighbors = getNeighbors(board, row, column);
      field.nearMines = neighbors.filter(n => n.mined).length; //vai pegar, com o 'filter, apenas os vizinhos que estão minados
    }
  }
};

const fields = board => [].concat(...board); //vai pegar todos os elementos como um Array
const hadExplosion = board =>
  fields(board).filter(field => field.exploded).length > 0;
const pedding = field =>
  (field.mined && !field.flagget) || (!field.mined && !field.opened);
const wonGame = board => fields(board).filter(pedding).length === 0;
const showMines = board =>
  fields(board)
    .filter(field => field.mined)
    .forEach(field => (field.opened = true));
const invertFlag = (board, row, column)=> {
  const field = board[row][column];
  field.flagget = !field.flagget;
};

const flagUsed = board => fields(board).filter(field => field.flagget).length;

export {
  createMinedBoard,
  cloneBoard,
  openField,
  wonGame,
  showMines,
  hadExplosion,
  invertFlag,
  flagUsed,
};
