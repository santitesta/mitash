import axios from "axios"

let token: string = process.env.NEXT_PUBLIC_TOKEN as string;
let url: string;
if (process.env.NODE_ENV === 'production') {
  // The production url
  // url = ''
} else {
  // The local host
  url = 'http://localhost:3001';
}

export const GET_USERS = "GET_USERS"

export function getUsers(): any {
  return function (dispatch: any) {
    return axios.get(`${url}/user`, {
      headers: {
        "Authorization": `Token ${token}`
      }
    })
      .then(res => {
        dispatch({ type: GET_USERS, payload: res.data })
      })
      .catch(error => console.log('Error en getUsers: ', error))
  }
}