const queryString = require('querystring');

const parsedString = queryString.parse(
  'gender=male&age=25&isfootballPlayer=true'
);

console.log(parsedString);

const generateQueryString = queryString.stringify({
  product: 'shirt',
  color: ['black', 'blue', 'white'],
  season: 'summer',
});

console.log(generateQueryString);
