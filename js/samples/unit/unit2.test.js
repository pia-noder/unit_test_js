import { getAge } from "./unit2.js";

describe('Suite de test unit2', () => {
    it('should return vous avez 30 ans', () => {
        expect(getAge(30)).toBe('Vous avez actuellement 30 ans')
    })
})