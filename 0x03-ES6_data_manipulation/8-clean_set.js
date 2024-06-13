export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  return [...set].filter((elem) => elem.startsWith(startString))
    .map((elem) => elem.slice(startString.length))
    .join('-');
}
