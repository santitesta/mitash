import axios from "axios";

let token: string = process.env.NEXT_PUBLIC_TOKEN as string;
let url: string;
if (process.env.NODE_ENV === "production") {
  // The production url
  // url = ''
} else {
  // The local host
  url = "http://localhost:3001";
}

export const GET_USERS = "GET_USERS";
export const CREATE_USER = "CREATE_USER";
export const GET_DEVICES = "GET_DEVICES";
export const CREATE_DEVICE = "CREATE_DEVICE";
export const GET_CLIENTS = "GET_CLIENTS";
export const CREATE_CLIENT = "CREATE_CLIENT";

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
