import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as store from './index'
import $ from 'jquery'

function* fetchUser(action) {
	console.log('saga-run!!');
   try {

   	const email = action.payload.email;
   	const password = action.payload.password;
	var XHR = XMLHttpRequest;
	var xhr = new XHR();

	xhr.open('POST', `http://localhost:1337/login?email=${email}&password=${password}`, false);
	xhr.onload = function() {
		console.log('zbs');
	  console.log( this.responseText );
	}

	xhr.onerror = function() {
	  console.log( 'Ошибка ' + this.status );
	}
	//xhr.setRequestHeader('Content-Type', 'hello');
	xhr.send();
	let jsonData = JSON.parse(xhr.responseText);
	let token = jsonData.jwtToken || null;
	console.log('token ' + token);

      //const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", token: token});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* getUser(action) {
	try{

		//let fromStore = store.default.getState();
		let token = action.payload.token;
		let res;
		console.log('saga+token ' + token);
		let XHR = XMLHttpRequest;
		let xhr = new XHR();

		xhr.open('GET', `http://localhost:1337/users`, false);
		xhr.onload = function() {
			console.log('zbs');
		  console.log( this.responseText );
		  res = this.responseText;
		}

		xhr.onerror = function() {
		  console.log( 'Ошибка ' + this.status );
		}
		xhr.setRequestHeader('token', token);
		xhr.send();
		//let res = this.responseText;
		yield put({type: "USER_GET_SUCCEEDED", res: res});
		return res;
	} catch (e) {
		yield put({type: "USER_FETCH_FAILED", message: e.message});
	}
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  yield takeEvery("USER_GET_REQUESTED", getUser);
}



export default mySaga;
