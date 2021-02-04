import * as actionTypes from "../constants/orderConstants";

export const addOrder = (name, email, items, price) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_ORDER,
    payload: { name, email, items, price },
  });

  localStorage.setItem("history", JSON.stringify(getState().history.orders));
};
