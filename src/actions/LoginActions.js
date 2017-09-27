import { USER_FETCH_REQUESTED } from '../constants/Login'

export function setLogin(user) {
  return {
    type: USER_FETCH_REQUESTED,
    payload: user
  }
}