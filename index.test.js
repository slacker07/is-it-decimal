const { isItDecimal } = require('./index');

describe('Test For is-Fraction', () => {
    it('Should return true', (done) => {
        expect(isItDecimal(10.01)).toBeTruthy;
        done();
    });

    it('Should return false', (done) => {
        expect(isItDecimal(10)).toBeFalsey;
        done();
    });
})
