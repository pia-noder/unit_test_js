import { sayHello } from "./unit1";

//2 cas a tester pour cette focntion : 
//1- Quand le parametre est defini
//2-Quand le parametre n'est pas defini

describe('SayHello Unit Test Suits', () => {
    it('should return "Hello, World"', () => {
        expect(sayHello()).toBe('Hello, World')
    });
    it('it should return "Hello, name"', () => {
        expect(sayHello("charlotte")).toBe("Hello, charlotte")
    })
    it('it should return "Bonjour Alexandra', () => {
        expect(sayHello("Alexandra")).toBe("Bonjour Alexandra")
    })
})