import { USER_GET_REQUESTED } from '../constants/Page'

export function getState(token) {

  return {
    type: USER_GET_REQUESTED,
    payload: token
  }
}