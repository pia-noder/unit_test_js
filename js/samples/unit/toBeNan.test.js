
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * 
 *  */ 
const makeSum = (a, b) => a + b;

/**
 * @param {string} a
 * @param {number} b
 * @returns {string}
 */

const makeString = (a, b) => a * b

describe('toBeNaN Tests Suite', () => {
    it('should be a number', () => {
        expect(makeSum(2,2)).not.toBeNaN()
    });
    it('should not be a number', () => {
        expect(makeString('Chat', 2)).toBeNaN()
    })
})