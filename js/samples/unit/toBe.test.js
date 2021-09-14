const me = {
    firstname: 'Charlotte',
    lastname: 'Louis',
    age: 23,
}

const color = 'terracota'

describe('tobBe tests Suite', () => {
    it('should return the firstname', () => {
        expect(me.firstname).toBe("Charlotte")
    });
    it('should retunr an age', () => {
        expect(me.age).toBe(23)
    });
    it('should return terracota', () => {
        expect(color).toBe('terracota')
    });
    it('should not be color lightBlue', () => {
        expect(color).not.toBe('lightBlue')
    })

}) 