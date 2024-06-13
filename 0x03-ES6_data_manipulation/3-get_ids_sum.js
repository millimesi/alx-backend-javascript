export default function getStudentIdsSum(array) {
  return array.reduce((sum, num) => sum + num.id, 0);
}
