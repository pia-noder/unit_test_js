import  Pagination  from "./index";


describe('Pagnination Test Unit Suits', ()=> {
    it('sould return something', () => {
        expect(Pagination.getNumberOfPages(12)).toBeDefined()
    });
    it('should return 0', () => {
        expect(Pagination.getNumberOfPages(0)).toEqual(0)
    });
    it('should return 1', () => {
        expect(Pagination.getNumberOfPages(7)).toEqual(1)
    });
    it('should return 5', () => {
        expect(Pagination.getNumberOfPages(34)).toEqual(5)
    })
})