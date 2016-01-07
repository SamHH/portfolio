import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
    <div>
      <h3>{this.props.person.name}</h3>
      <p>{this.props.person.email}</p>
      <p>{this.props.person.phone}</p>
      <img style={{maxWidth: '50px'}} src={this.props.person.img} />
    </div>
    );
  }
}
Contact.defaultProps = {
  person: {
    name: 'Unnamed',
    email: 'user@domain.tld',
    img: 'http://images.fineartamerica.com/images/artworkimages/mediumlarge/1/camouflage-bengal-cat-square-robyn-saunders.jpg',
    phone: '+44 1234 567 890'
  }
}

export default Contact;
