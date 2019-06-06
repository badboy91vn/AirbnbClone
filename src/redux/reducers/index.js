import { combineReducers } from "redux";
// import CategoryReducer from "./CategoryReducer";
import PingReducer from "./PingReducer";

export default combineReducers({
    // categoryData: CategoryReducer,
    pingData: PingReducer
});
