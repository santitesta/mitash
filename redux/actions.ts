import axios from "axios"

let url = 'http://localhost:8000';
// if (process.env.NODE_ENV === 'production') {
//   url = 'https://utnlogin.anlis.gob.ar'
// } else {
//   url = process.env.REACT_APP_APIPORT
// }

export function getUsers(): any {
  return axios.get(`${url}/user`)
    .then(resp => console.log('getUsers response: ', resp))
    .catch(error => console.log('Error en getUsers: ', error))
}

  // const [employeesBro, setEmployeesBro] = useState<any[]>([])

  // const employee = {
  //   name: 'Pato fontanet',
  //   role: 'Tiburon'
  // }

  // const employee2 = {
  //   name: 'Javier el galan',
  //   role: 'Doble de riesgo'
  // }

  // function postEmployee() {
  //   axios.post('http://localhost:8000/newemployee', employee)
  //     .then(resp => console.log('Todo bien cabro: ', resp))
  //     .catch(error => console.log('Se rompio tooo'))
  // }

  // function postEmployee2() {
  //   axios.post('http://localhost:8000/newemployee', employee2)
  //     .then(resp => console.log('Todo bien cabro: ', resp))
  //     .catch(error => console.log('Se rompio tooo'))
  // }

  // async function getEmployees() {
  //   const users = await getUsers()
  //   console.log('Users broder: ', users)
  //   // if(users.data) setEmployeesBro(users.data)
  // }