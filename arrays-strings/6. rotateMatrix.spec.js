/* eslint-disable new-cap  */
const {expect} = require('chai');
const {rotateMatrix90} = require('./arrays-strings');

describe('function rotateMatrix90()', () => {

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

  xit('takes an NxN two-dimensional array and returns a reference to the same array',
 // i.e. it rotates that matrix in place, avoiding creating a buffer or new matrix
  () => {
    let result = rotateMatrix90(matrix3x3);
    expect(result).to.be.an.instanceOf(Array);
    expect(matrix3x3 === result).to.be.true;
  })

  xit('rotates the elements of the passed-in matrix clock-wise 90 degrees IN PLACE (i.e. without creating a new array)', () => {
    /* Example:
            this  ------ becomes ---->  this
      [1,  2,  3,  4],              [13,  9, 5, 1],
      [5,  6,  7,  8],              [14, 10, 6, 2],
      [9,  10, 11, 12],             [15, 11, 7, 3],
      [13, 14, 15, 16]              [16, 12, 8, 4]
    */

    // store a copy of original matrix:
    const unrotated = matrix3x3.map(row => [...row]);
    const length = matrix3x3.length;
    // rotate it in place
    rotateMatrix90(matrix3x3);
    // check that all elements are properly rotated to the correct new position
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        expect(unrotated[i][j]).to.equal(matrix3x3[j][length - 1 - i])
      }
    }
  })

  xit('can rotate an NxN matrix of any size', () => {
    // checking matrix sizes from 4x4 to 10x10:
    for (let num = 4; num < 10; num++) {
      // make a new matrix for us to rotate:
      const currMatrix = NxNMatrix(num);
      // store a copy of the original:
      const unrotated = currMatrix.map(row => [...row]);
      const length = currMatrix.length;
      // rotate it in place:
      rotateMatrix90(currMatrix);
      // check that all elements are properly rotated to the correct position:
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          expect(unrotated[i][j]).to.equal(currMatrix[j][length - 1 - i])
        }
      }
    }
  })
})
