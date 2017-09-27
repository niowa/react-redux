import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
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

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}



export default mySaga;
