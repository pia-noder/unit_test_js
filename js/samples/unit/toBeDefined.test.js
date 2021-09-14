const getName = () => 'Charlotte'
const userAge = 30

//toBeDEfined sur une fonction verifie que la fonction retourne bien quelque chose
describe('toBeDefined Tests Suite', () => {
    it('should return a name', () => {
        expect(getName()).toBeDefined()
    });
    //toBeDefined sur une constante verifie que celle-ci est bien defini
    it('should return an age/number', () => {
        expect(userAge).toBeDefined()
    })
})