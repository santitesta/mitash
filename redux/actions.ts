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
export const GET_DEVICES = "GET_DEVICES";
export const GET_CLIENTS = "GET_CLIENTS";

export function getUsers(): any {
  return function (dispatch: any) {
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

export function getDevices(): any {
  return function (dispatch: any) {
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

export function getClients(): any {
  return function (dispatch: any) {
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
