import { createStore } from "redux";

const initialState = {
  sidebarShow: true,
  dataProduct: [],
  transaksi: [],
};

const changeState = (state = initialState, action) => {
  switch (action.type) {
    case "set":
      return { ...state, ...action.rest };
    case "SET_PRODUCT":
      return { ...state, dataProduct: action.product };
    case "SET_TRANSAKSI":
      return { ...state, transaksi: action.transaksi };
    default:
      return state;
  }
};

const store = createStore(changeState);
export default store;
