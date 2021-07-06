const events = require('events');
const emiter = new events.EventEmitter();
const users = require('./users');

emiter.on('check_online_users', (data) => {
  data.people.forEach((person) => {
    if (person.isLoggedIn == true) {
      console.log(person);
    }
  });
});

emiter.on('check_online_users', (data) => {
  data.people.forEach((person) => {
    console.log(person.name);
  });
});

const userLisners = emiter.rawListeners('check_online_users');
// console.log(userListeners);

// prepend
emiter.prependListener('check_online_users', () => {
  console.log('Checking for online users....');
});

// userLisners[0](users);
// userLisners[1](users);
emiter.emit('check_online_users', users);

emiter.setMaxListeners(8);

emiter.on('secondEventListenerOnemiter', () => {
  console.log('second event');
});

console.log(emiter.eventNames());
