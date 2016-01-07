import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      age: props.age,
      name: props.name
    }
  }
  _incrementAge = () => {
    this.setState({
      age: this.state.age + 1
    })
  }
  _decrementAge = () => {
    this.setState({
      age: this.state.age - 1
    })
  }
  _updateName = () => {
    this.setState({
      name: document.getElementById('name').value
    })
  }
  render () {
    return (
      <section>
        <h1>Hello World</h1>
        <p>
          Your name is {this.state.name ? this.state.name : '?'}
        </p>
        <p>
          Your age is {this.state.age}
        </p>
        <button onClick={this._incrementAge}>Increase age +</button> &nbsp;
        <button onClick={this._decrementAge}>Decrease age -</button> <br />
        <label htmlFor="name">Your name: </label>
        <input style={{outline: '1px solid orange'}} type="text" name="name" id="name" onChange={this._updateName} />
      </section>
    );
  }
}
HelloWorld.propTypes = {
  age: React.PropTypes.number,
  name: React.PropTypes.string
}
HelloWorld.defaultProps = {
  age: 20,
  name: '?'
}

export default HelloWorld;
