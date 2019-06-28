const { isDecimal } = require('./index');

describe('Test For is-Fraction', () => {
    it('Should return true', (done) => {
        expect(isDecimal(10.01)).toBeTruthy;
        done();
    });

    it('Should return false', (done) => {
        expect(isDecimal(10)).toBeFalsey;
        done();
    });
})
