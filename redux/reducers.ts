import {
  LOGIN,
  GET_USERS,
  GET_DEVICES,
  GET_CLIENTS,
  GET_ORDERS,
  CREATE_USER,
  CREATE_CLIENT,
  CREATE_DEVICE,
  CREATE_ORDER,
  CHECK_AUTH,
  LOGOUT,
} from "./actions";

const initialState = {
  users: [],
  devices: [],
  clients: [],
  orders: [],
  token: "",
};

export function rootReducer(
  state = initialState,
  { type, payload }: { type: string; payload: any }
) {
  switch (type) {
    case CHECK_AUTH:
      return { ...state, token: payload };

    case LOGIN:
      localStorage.setItem("token", payload.user.token);
      return { ...state, token: payload.user.token };

    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, token: "" };

    case GET_USERS:
      return { ...state, users: payload };

    case CREATE_USER:
      return { ...state, users: [...state.users, payload.user] };

    case GET_DEVICES:
      return { ...state, devices: payload };

    case CREATE_DEVICE:
      return { ...state, devices: [...state.devices, payload.device] };

    case GET_CLIENTS:
      return { ...state, clients: payload };

    case CREATE_CLIENT:
      return { ...state, clients: [...state.clients, payload.client] };

    case GET_ORDERS:
      return { ...state, orders: payload };

    case CREATE_ORDER:
      return { ...state, orders: [...state.orders, payload.order] };

    default:
      return state;
  }
}
