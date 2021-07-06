const url = require('url').URL;

const myUrl = new url('https://facebook.com/users');

const myUrlHost = myUrl.host;
console.log(myUrlHost);

const myUrlOrigin = myUrl.origin;
console.log(myUrlOrigin);

const myLocalUrl = new url('http://localhost:3000');

const myLocalUrlPort = myLocalUrl.port;
console.log(myLocalUrlPort);
console.log(myLocalUrl.protocol);

myLocalUrlString = myLocalUrl.toString();
// console.log(myLocalUrl);
console.log(myLocalUrlString);

const myUrlQuery = new url('http://my-app.com?user=metodija');
const queryParams = myUrlQuery.searchParams;
console.log(queryParams.get('user'));

myUrlQuery.searchParams.append('age', '28');
console.log(myUrlQuery.toString());
console.log(myUrlQuery.searchParams);
