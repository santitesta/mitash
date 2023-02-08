import { GET_USERS, GET_DEVICES, GET_CLIENTS, CREATE_USER } from "./actions";

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

    case GET_DEVICES:
      return { ...state, devices: payload };

    case GET_CLIENTS:
      return { ...state, clients: payload };

    case CREATE_USER:
      return { ...state, users: [...state.users, payload.user] };

    default:
      return state;
  }
}
