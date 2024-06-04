export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const department in report.allEmployees) {
    if (department in report.allEmployees) {
      allEmployees = allEmployees.concat(report.allEmployees[department]);
    }
  }
  return {
    * [Symbol.iterator]() {
      for (const employe of allEmployees) {
        yield employe;
      }
    },
  };
}
