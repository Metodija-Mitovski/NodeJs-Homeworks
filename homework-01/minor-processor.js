module.exports = (people, ageLimit) => {
  let counter = 0;

  people.forEach((person) => {
    if (person.age < ageLimit) {
      counter++;
      console.log(`Ime: ${person.name}, Prezime: ${person.lastName}`);
    }
  });

  console.log(`Pronajdeni se ${counter} maloletnici`);
};
