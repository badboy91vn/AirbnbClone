import { combineEpics } from "redux-observable";
// import CategoryEpic from "./CategoryEpic";
import PingEpic from "./PingEpic";

export default combineEpics(PingEpic);
