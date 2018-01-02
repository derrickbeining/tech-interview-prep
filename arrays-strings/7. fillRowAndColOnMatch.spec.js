const {expect} = require('chai');
const {fillRowAndColOnMatch} = require('./arrays-strings');

describe('function fillRowAndColOnMatch()', () => {
  const Matrix = (numRows, numCols) => {
    const matrix = Array(numRows).fill(0).map(() => Array(numCols));
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = count++;
      }
    }
    return matrix;
  }

  let matrix;
  const rows = 5;
  const cols = 4;
  beforeEach('create new matrix', () => {
    matrix = Matrix(rows, cols);
  })

  xit('takes a MxN matrix and a match value of any type and returns the same matrix', () => {
    expect(fillRowAndColOnMatch(matrix, 1)).to.equal(matrix);
  });

  xit('traverses the matrix until it finds the match; if found, it sets the entire row and column of that element to the matched value', () => {
    for (let matchVal = 0; matchVal < (rows * cols); matchVal++) {
      matrix = Matrix(rows, cols);
      const rowToCheck = Math.floor(matchVal / cols);
      const colToCheck = matchVal % cols;
      fillRowAndColOnMatch(matrix, matchVal)
      for (let row = 0; row < matrix.length; row++) {
        if (row === rowToCheck) {
          for (let col = 0; col < matrix[row].length; col++) {
            expect(matrix[row][col]).to.equal(matchVal);
          }
        } else {
          expect(matrix[row][colToCheck]).to.equal(matchVal);
        }
      }
    }
  })
})
