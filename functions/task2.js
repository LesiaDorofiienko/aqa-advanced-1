const ageOfAdulthood = 18;

function isPersonAdult(age) {
  const isPersonAdult = age >= ageOfAdulthood;
  return isPersonAdult;
}

console.log("isPersonAdult 15", isPersonAdult(15));
console.log("isPersonAdult 18", isPersonAdult(18));
console.log("isPersonAdult 26", isPersonAdult(26));
