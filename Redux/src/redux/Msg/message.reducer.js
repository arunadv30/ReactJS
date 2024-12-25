import { GM, GN } from "./message.action";

let initialState = {
  msg: "Hello Rahul",
};

let messageReducer = (state = initialState, action) => {
  console.log(action);
  console.log(action.type);
  switch (action.type) {
    case "GM":
      return { msg: "GM Rahul" };
    case "GN": {
      return { msg: "GN Rahul" };
    }
    default:
      return state;
  }
};

export { messageReducer };
