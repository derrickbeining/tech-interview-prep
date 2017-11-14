/* eslint-disable new-cap  */
const {expect} = require('chai');
const {rotateMatrix90} = require('./arrays-strings');

describe('function rotateMatrix()', () => {

  const NxNMatrix = num => {
    const matrix = Array(num).fill(0).map(() => Array(num));
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        matrix[i][j] = ++count;
      }
    }
    return matrix;
  }

  let matrix3x3;
  beforeEach('make new matrix', () => {
    matrix3x3 = NxNMatrix(3);
  });

  it('takes an NxN two-dimensional array and returns a reference to the same array', () => {
    let result = rotateMatrix90(matrix3x3);
    expect(result).to.be.an.instanceOf(Array);
    expect(matrix3x3 === result).to.be.true;
  })

  it('rotates the elements of the passed-in matrix clock-wise 90 degrees IN PLACE (i.e. without creating a new array)', () => {
    /* Example:
            this  ------ becomes ---->  this
      [1,  2,  3,  4],              [13,  9, 5, 1],
      [5,  6,  7,  8],              [14, 10, 6, 2],
      [9,  10, 11, 12],             [15, 11, 7, 3],
      [13, 14, 15, 16]              [16, 12, 8, 4]
    */
    const unrotated = matrix3x3.map(row => [...row]);
    const length = matrix3x3.length;
    rotateMatrix90(matrix3x3)
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        expect(unrotated[i][j]).to.equal(matrix3x3[j][length - 1 - i])
      }
    }
  })

  it('can rotate an NxN matrix of any size', () => {
    for (let num = 4; num < 10; num++) {
      const currMatrix = NxNMatrix(num);
      const unrotated = currMatrix.map(row => [...row]);
      const length = currMatrix.length;
      rotateMatrix90(currMatrix)
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          expect(unrotated[i][j]).to.equal(currMatrix[j][length - 1 - i])
        }
      }
    }
  })
})
