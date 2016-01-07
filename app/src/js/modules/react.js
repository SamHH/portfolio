import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './HelloWorld';
import ContactList from './ContactList';

export default function () {
  if (!document.getElementById('reactContainer')) return;
  ReactDOM.render(
    <div>
      <HelloWorld />
      <ContactList />
    </div>
    ,
    document.getElementById('reactContainer')
  );
};
