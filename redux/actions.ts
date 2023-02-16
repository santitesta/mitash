import axios from "axios";
import { toast } from "react-toastify";

let token: string = process.env.NEXT_PUBLIC_TOKEN as string;
let url: string;
if (process.env.NODE_ENV === "production") {
  // The production url
  // url = ''
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

export function checkAuth(token: any): any {
  return async function (dispatch: any) {
    return dispatch({ type: CHECK_AUTH, payload: token });
  };
}

export function login(loginUserDto: any): any {
  return async function (dispatch: any) {
    return axios
      .post(`${url}/user/login`, { user: loginUserDto })
      .then((res) => {
        toast.success('Inicio de sesión satisfactorio')
        dispatch({ type: LOGIN, payload: res.data });
      })
      .catch((error) => {
        console.log("Error en login: ", error);
        if (error.code === "ERR_NETWORK") error.message = "servidor caído";
        toast.error(`Error: ${error.message}`);
      });
  };
}

export function logout(): any {
  return async function (dispatch: any) {
    toast.success('Cierre sesión satisfactorio')
    return dispatch({ type: LOGOUT, payload: null });
  };
}

export function getUsers(): any {
  return async function (dispatch: any) {
    return axios
      .get(`${url}/users`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: GET_USERS, payload: res.data });
      })
      .catch((error) => console.log("Error en getUsers: ", error));
  };
}

export function createUser(user: any): any {
  return async function (dispatch: any) {
    return axios
      .post(`${url}/user`, {
        user,
        headers: {
          Authorization: `Token ${token}`,
        },
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
      .get(`${url}/devices`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
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
        headers: {
          Authorization: `Token ${token}`,
        },
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
      .get(`${url}/clients`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
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
        headers: {
          Authorization: `Token ${token}`,
        },
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
      .get(`${url}/orders`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
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
        headers: {
          Authorization: `Token ${token}`,
        },
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
