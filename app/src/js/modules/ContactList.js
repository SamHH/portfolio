import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './Contact';

var people = [
  {
    'name': 'Hodor',
    'email': 'hodor@northofthewall.net',
    'img': 'https://pbs.twimg.com/media/BqBP5KzCUAA_n0X.png',
    'phone': '+44 9573 333 367'
  },
  {
    'name': 'Hodor 2 NEW HODOR!!!',
    'email': 'hodor2@northofthewall.net',
    'img': 'https://pbs.twimg.com/media/BqBP5KzCUAA_n0X.png',
    'phone': '+44 9573 333 367'
  }
];

class ContactList extends React.Component {
  render() {
    return (
      <section>
        <h1>Contact List</h1>
        {people.map(function (person, i) {
          return (<Contact person={person} key={i} />);
        })}
        <Contact />
      </section>
    );
  }
}

export default ContactList;
