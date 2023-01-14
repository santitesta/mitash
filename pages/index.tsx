// import axios from "axios"
// import { useState } from "react"
// import { getUsers } from "../redux/actions"

export default function Home() {
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

  return (
    <div className="flex flex-col place-content-center place-items-center h-screen w-screen bg-blue-500">
      <h1 className="text-6xl">Mitash</h1>
      <p className="text-xl">Seguimiento interno de equipos</p>
      {/* <button className="btn" onClick={postEmployee}>Sumame al pato</button>
      <button className="btn" onClick={postEmployee2}>Sumame a javier</button>
      <button className="btn" onClick={getEmployees}>Traeme al pato y javi</button> */}
      {/* {employeesBro.length
        ? employeesBro.map((e, i) => {
          return (
            <h1 key={i}>{e.name}</h1>
          )
        })
        : <h1>Sorry, no employees</h1>} */}
    </div>
  )
}
