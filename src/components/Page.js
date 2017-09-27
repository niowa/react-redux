import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
  constructor(props) {
    super(props);
    let email = props.email;
    let password = props.password;
    this.state = {email: '', password: ''};
    console.log(this.state);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    console.log(event.target.value);
    this.setState({email: event.target.value});
  }

  handlePassChange(event) {
    console.log(event.target.value);
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state)
    alert('A name was submitted: ' + this.state.email + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handlePassChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
}