import { isInTestEnv } from "./index";

describe('isInTestEnv Tests Suite', () => {
    it('should return true or false', () => {
        expect(isInTestEnv()).toBe(true || false)
    });
    it('should return something', () => {
        expect(isInTestEnv()).toBeDefined()
    })
})