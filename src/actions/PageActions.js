import { GET_STATE } from '../constants/Page'

export function getState(text) {

  return {
    type: GET_STATE,
    payload: text
  }
}