import {expect} from 'chai';
import {fillMatrixRowsAndColsOnMatch} from './arrays-strings';

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
  beforeEach('create new matrix', () => {
    matrix = new Matrix(5, 4);
  })

  it('takes a matrix of any dimensions and a match value of any type and returns the same matrix', () => {
    expect(fillMatrixRowsAndColsOnMatch(matrix, 1)).to.equal(matrix);
  });

  it('traverses the matrix until it finds the match; if found, it sets the entire row and column of that element to the matched value', () => {
    const matchVal = 2;
    fillMatrixRowsAndColsOnMatch(matrix, matchVal)
    for (let i = 0; i < matrix.length; i++) {
      expect(matrix[i][matchVal]).to.equal(matchVal);

      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j]
      }
    }
  })
})
