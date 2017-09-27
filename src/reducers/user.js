import { USER_FETCH_REQUESTED, USER_FETCH_SUCCEEDED, USER_FETCH_FAILED} from '../constants/Login'

const initialState = {
	token: ''
}

export default function user(state = initialState, action) {
	if (state) {
		console.log('state: ' + JSON.stringify(state));
	}
	
	let value = action.token;
	console.log('tokenss ' + action.token);
	
  switch (action.type) {
        case USER_FETCH_REQUESTED: 
    	console.log('caseRun');
    	return state;

    case USER_FETCH_SUCCEEDED:
    	return { ...state, token: action.token };

    case USER_FETCH_FAILED: 
    	console.log('not fount');
    	return state;

    default:
      return state;
  }
}