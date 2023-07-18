function convertToObject(jsonString) {
  let person = JSON.parse(jsonString);
  Object.entries(person).forEach(function ([key, value]) {
    console.log(`${key}: ${value}`);
  });
}
