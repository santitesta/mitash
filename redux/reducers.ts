import {
  GET_USERS,
  GET_DEVICES,
  GET_CLIENTS,
  CREATE_USER,
  CREATE_CLIENT,
  CREATE_DEVICE,
} from "./actions";

const initialState = {
  users: [],
  devices: [],
  clients: [],
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

    default:
      return state;
  }
}
