import { GET_STATE } from '../constants/Page'

const initialState = {
  text: ''
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case GET_STATE:
      return state;

    default:
      return state;
  }

}