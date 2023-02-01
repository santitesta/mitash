import axios from "axios"

let url: string;
if (process.env.NODE_ENV === 'production') {
  // The production url
  // url = ''
} else {
  // The local host
  url = 'http://localhost:3001';
}

let token = process.env.NEXT_PUBLIC_TOKEN;
console.log('Token brodi: ', token)

export function getUsers(): any {
  console.log('Token in get users: ', token)
  return axios.get(`${url}/user`, {
    headers: {
      "Authorization": `Token ${token}`
    }
  })
    .then(res => console.log('Res: ', res))
    .catch(error => console.log('Error en getUsers: ', error))
}