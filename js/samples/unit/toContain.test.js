/**
 * @returns {array}
 */

const getFriends = () => ['Louise', "Theo", "Rose","Opi"]

describe('toContain Tests Suite', () => {
    it('should contain that friend', () => {
        expect(getFriends()).toContain('Theo')
    });
    it('should not contain this name', () => {
        expect(getFriends()).not.toContain('Blandine')
    })
}) 