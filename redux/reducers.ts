import {
  GET_USERS,
  GET_DEVICES,
  GET_CLIENTS,
  GET_ORDERS,
  CREATE_USER,
  CREATE_CLIENT,
  CREATE_DEVICE,
  CREATE_ORDER,
} from "./actions";

const initialState = {
  users: [],
  devices: [],
  clients: [],
  orders: [],
};

export function rootReducer(
  state = initialState,
  { type, payload }: { type: string; payload: any }
) {
  switch (type) {
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
