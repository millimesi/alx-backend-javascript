function calculateNumber(type, a, b) {
  const roundA = Math.round(a);
  const roundB = Math.round(b);

  if (type === 'SUM') {
    return (roundA + roundB);
  } if (type === 'SUBTRACT') {
    return (roundB - roundA);
  } if (type === 'DIVIDE') {
    if (roundB === 0) {
      return 'Error';
    }
    return (roundA / roundB);
  }
  return 'Type should be SUM, SUBTRACT or DIVIDE';
}

module.exports = calculateNumber;
