import { USER_FETCH_SUCCEEDED, USER_FETCH_FAILED} from '../constants/Login'

const initialState = {
	token: ''
}

export default function user(state = initialState, action) {
  switch (action.type) {
     //    case USER_FETCH_REQUESTED: 
    	// console.log('caseRun');
    	// return state;

    case USER_FETCH_SUCCEEDED:
    	return { ...state, token: action.token };

    case USER_FETCH_FAILED: 
    	console.log('not fount');
    	return { ...state, token: null };

    default:
      console.log('DEFAULT ' + JSON.stringify(state));
      return state;
  }
}