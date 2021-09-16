const total = 10

/**
 * 
 * @param {string} name 
 * @returns {string}
 */
const sayHello = name => `hello, ${name}`

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
const makeSum = (a, b) => a + b


//Ce test numero 3 est a effet de bord
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
const makeProduct = (a, b) => total ? a * b : a * total

/**
 * 
 * @param {number} age 
 * @returns {string}
 */
const getAge = (age) => `${age} ans`