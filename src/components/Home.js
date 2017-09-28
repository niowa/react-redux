import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as store from '../index'
import * as pageActions from '../actions/PageActions'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {res: 'hello'};
	};
	componentDidMount() {
		let res = this.state.res;
		const {dispatch} = this.props;
		let fromStore = store.default.getState();
		let token = fromStore.user.token;
		dispatch(pageActions.getState({token}));
		fromStore = store.default.getState();
		let result = fromStore.user.res;
      	this.setState({res: result});
    }

  render() {
  	let res = this.state.res;
    return (
      <div className='row'>
       <p>{res}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    res: state.res
  }
}

export default connect(mapStateToProps)(Home);
