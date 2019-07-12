console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux

function findBestEmployee(employees) {
  let bestEmployee = "";
  let bestScore = 0;

  for (const employee of Object.entries(employees)) {
    bestEmployee = bestScore > employee[1] ? bestEmployee : employee[0];
    bestScore = bestScore > employee[1] ? bestScore : employee[1];
  }

  return bestEmployee;
}
