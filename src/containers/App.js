import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as loginActions from '../actions/LoginActions'
// import User from '../components/User'
// import Page from '../components/Page'
// import * as pageActions from '../actions/PageActions'

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user)
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
    const {dispatch} = this.props;
    const {email, password} = this.state;
    console.log('fun ' + loginActions.setLogin);
    // console.log('email ' + email);
    // console.log('password ' + password);
    let user = {email, password};
    dispatch(loginActions.setLogin({email, password}));
    //console.log(this.state)
    console.log('A name was submitted: ' + this.state.email + this.state.password);
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
//
function mapStateToProps(state) {
  return {
    user: state.user
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     loginActions: bindActionCreators(loginActions, dispatch)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default connect(mapStateToProps)(App);