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
  ASSIGN_EMPLOYEE,
  CHECK_AUTH,
  LOGOUT,
} from "./actions";

const initialState = {
  employees: [],
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
      return { ...state, token: payload.employee.token };

    case LOGIN:
      localStorage.setItem("token", payload.employee.token);
      return { ...state, token: payload.employee.token };

    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, token: "" };

    case GET_USERS:
      return { ...state, employees: payload };

    case CREATE_USER:
      return { ...state, employees: [...state.employees, payload.employee] };

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

    case ASSIGN_EMPLOYEE:
      const orderIndex = state.orders.findIndex(
        (o: any) => o.id === payload.order.id
      );
      const updatedOrder = {
        ...(state.orders[orderIndex] as object),
        employee: payload.order.employee,
      };
      const updatedOrders = [...state.orders];
      (updatedOrders[orderIndex] as any) = updatedOrder;
      return { ...state, orders: updatedOrders };

    default:
      return state;
  }
}
