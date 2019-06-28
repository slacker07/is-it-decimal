const isItDecimal = (n) => {
    try {
        return Number(n) === n && n % 1 !== 0;
    } catch (error) {
        return error;
    }
}

module.exports = {
    isItDecimal
};