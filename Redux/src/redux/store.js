import { messageReducer } from "./Msg/message.reducer";
import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

let store = createStore(messageReducer, composeWithDevTools());

export { store };
