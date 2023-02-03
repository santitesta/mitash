import { GET_USERS, GET_DEVICES } from "./actions";

const initialState = {
  users: [],
  devices: [],
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

    default:
      return state;
  }
}
