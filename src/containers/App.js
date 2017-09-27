import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as loginActions from '../actions/LoginActions'
import * as store from '../index'
// import User from '../components/User'
// import Page from '../components/Page'
// import * as pageActions from '../actions/PageActions'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('user ' + JSON.stringify(this.props.user));
    let email = props.email;
    let password = props.password;
    this.state = {email: '', password: ''};
    console.log('state ' + JSON.stringify(this.state));


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
    // console.log('email ' + email);
    // console.log('password ' + password);
    let user = {email, password};
    dispatch(loginActions.setLogin({email, password}));
    console.log('store');
    console.log(store.default.getState());
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


// import * as actionCreators from './actionCreators'
// import { bindActionCreators } from 'redux'

// function selectorFactory(dispatch) {
//   let state = {}
//   let ownProps = {}
//   let result = {}
//   const actions = bindActionCreators(actionCreators, dispatch)
//   const addTodo = (text) => actions.addTodo(ownProps.userId, text)
//   return (nextState, nextOwnProps) => {
//     const todos = nextState.todos[nextProps.userId]
//     const nextResult = { ...nextOwnProps, todos, addTodo }
//     state = nextState
//     ownProps = nextOwnProps
//     if (!shallowEqual(result, nextResult)) result = nextResult
//     return result
//   }
// }
// export default connectAdvanced(selectorFactory)(TodoApp)
