import {
  GET_USERS,
} from "./actions"

const initialState = {
  users: [],
}

export function rootReducer(
  state = initialState,
  { type, payload }: { type: string, payload: any }
) {
  switch (type) {
    case GET_USERS:
      console.log('Payload: ', payload)
      return { ...state, users: payload }

    default: return state;
  }
}