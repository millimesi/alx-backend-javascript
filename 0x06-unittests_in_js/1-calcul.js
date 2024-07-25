function calculateNumber(type, a, b) {
    const roundA = Math.round(a);
    const roundB = Math.round(b);

    if (type === 'SUM') {
        return (roundA + roundB );
    } else if (type === 'SUBTRACT') {
        return (roundB - roundA);
    } else if (type === 'DIVIDE') {
        if (roundB === 0) {
            return new Error('Error')
        } else {
            return (roundA / roundB)
        }
    } else {
        return 'Type should be SUM, SUBSTRACT or DIVIDE'
    }
}

module.exports = calculateNumber;
