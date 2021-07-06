const fs = require('fs');
const faker = require('faker');

const generateRandomPerson = () => {
  const name = faker.fake('{{name.firstName}} {{name.lastName}}');

  let date = faker.date.between(1980, 2000).toString();
  date = date.split(' ');
  const [dayinWord, month, day, year] = date;
  const dateOfBirth = `${day} ${month} ${year}`;

  const creditCardNumber = faker.finance.creditCardNumber();
  const balance = `${faker.finance.amount()} $`;

  const street = faker.address.streetName();
  const city = faker.address.city();
  const country = faker.address.country();
  const zipCode = faker.address.zipCode();
  const lat = faker.address.latitude();
  const lon = faker.address.longitude();

  const person = {
    name,
    dateOfBirth,
    creditCardNumber,
    balance,
    adress: {
      street,
      city,
      country,
      zipCode,
      geoLocation: {
        lat,
        lon,
      },
    },
  };

  return person;
};

const generateUsers = (numberOfUsers) => {
  const users = [];

  for (let i = 1; i <= numberOfUsers; i++) {
    const person = generateRandomPerson();
    users.push(person);
  }

  const writeStream = fs.createWriteStream('./users.txt');
  writeStream.write(JSON.stringify(users));
  console.log(users);
};

generateUsers(20);
