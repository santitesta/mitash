import axios from "axios";
import { toast } from "react-toastify";

let url: string;
if (process.env.NODE_ENV === "production") {
  // The production url
  url = "http://52.67.176.152:8080";
} else {
  // The local host
  url = "http://localhost:3001";
}

export const CHECK_AUTH = "CHECK_AUTH";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_USERS = "GET_USERS";
export const CREATE_USER = "CREATE_USER";
export const GET_DEVICES = "GET_DEVICES";
export const CREATE_DEVICE = "CREATE_DEVICE";
export const GET_CLIENTS = "GET_CLIENTS";
export const CREATE_CLIENT = "CREATE_CLIENT";
export const GET_ORDERS = "GET_ORDERS";
export const CREATE_ORDER = "CREATE_ORDER";

// export function checkAuth(token: any): any {
//   return async function (dispatch: any) {
//     return axios
//       .get(`${url}/employee`, {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       })
//       .then((res) => {
//         console.log("Trigger");
//         dispatch({ type: CHECK_AUTH, payload: res.data });
//       })
//       .catch((error) => {
//         console.log(`Error: ${error.message}`, error);
//       });
//   };
// }

export function login(loginUserDto: any): any {
  return async function (dispatch: any) {
    return axios
      .post(`${url}/employee/login`, { employee: loginUserDto })
      .then((res) => {
        toast.success("Inicio de sesión satisfactorio");
        dispatch({ type: LOGIN, payload: res.data });
      })
      .catch((error) => {
        console.log("Error en login: ", error);
        if (error.code === "ERR_NETWORK") error.message = "servidor caído";
        toast.error(`Error: ${error.message}`);
      });
  };
}

export function logout(message?: string): any {
  return async function (dispatch: any) {
    if (message) toast.success(message);
    return dispatch({ type: LOGOUT, payload: null });
  };
}

export function getUsers(): any {
  return async function (dispatch: any) {
    return axios
      .get(`${url}/employees`)
      .then((res) => {
        dispatch({ type: GET_USERS, payload: res.data });
      })
      .catch((error) => console.log("Error en getUsers: ", error));
  };
}

export function createUser(employee: any): any {
  return async function (dispatch: any) {
    return axios
      .post(`${url}/employee`, {
        employee,
      })
      .then((res) => {
        dispatch({ type: CREATE_USER, payload: res.data });
      })
      .catch((error) =>
        console.log(
          "Error en createUser: ",
          error.message,
          error.response.data.message
        )
      );
  };
}

export function getDevices(): any {
  return async function (dispatch: any) {
    return axios
      .get(`${url}/devices`)
      .then((res) => {
        dispatch({ type: GET_DEVICES, payload: res.data });
      })
      .catch((error) => console.log("Error en getDevices: ", error));
  };
}

export function createDevice(data: any): any {
  return async function (dispatch: any) {
    return axios
      .post(`${url}/device/${data.clientId}`, {
        device: data.device,
      })
      .then((res) => {
        dispatch({ type: CREATE_DEVICE, payload: res.data });
      })
      .catch((error) =>
        console.log(
          "Error en createUser: ",
          error.message,
          error.response.data.message
        )
      );
  };
}

export function getClients(): any {
  return async function (dispatch: any) {
    return axios
      .get(`${url}/clients`)
      .then((res) => {
        dispatch({ type: GET_CLIENTS, payload: res.data });
      })
      .catch((error) => console.log("Error en getClients: ", error));
  };
}

export function createClient(client: any): any {
  return async function (dispatch: any) {
    return axios
      .post(`${url}/client`, {
        client,
      })
      .then((res) => {
        dispatch({ type: CREATE_CLIENT, payload: res.data });
      })
      .catch((error) =>
        console.log(
          "Error en createClient: ",
          error.message,
          error.response.data.message
        )
      );
  };
}

export function getOrders(): any {
  return async function (dispatch: any) {
    return axios
      .get(`${url}/orders`)
      .then((res) => {
        dispatch({ type: GET_ORDERS, payload: res.data });
      })
      .catch((error) => console.log("Error en getOrders: ", error));
  };
}

export function createOrder(order: any): any {
  return async function (dispatch: any) {
    return axios
      .post(`${url}/order`, {
        order,
      })
      .then((res) => {
        dispatch({ type: CREATE_ORDER, payload: res.data });
      })
      .catch((error) =>
        console.log(
          "Error en createOrder: ",
          error.message,
          error.response.data.message
        )
      );
  };
}
