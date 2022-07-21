const mathOperations = reqire('./index');
describe('Calculator test with jest' ,()=> {
    test('addition test',()=>{
        expect(mathOperations.sum(1,2)).toBe(3);
    });
    test('subtraction test',()=>{
        expect(mathOperations.diff(22,11)).toBe(11);
    });
    test('multiply test',()=>{
        expect(mathOperations.multiply(4,2)).toBe(8);
    });
})