import { isInTestEnv } from "./index";

describe('isInTestEnv Tests Suite', () => {
    it('should be in test env', () => {
        expect(isInTestEnv()).toBe(true)
    });
    it('should return something', () => {
        process.env.NODE_ENV = 'dev'
        expect(isInTestEnv()).not.toBe(true)
    })
})