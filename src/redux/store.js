import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import reducers from "./reducers";
import rootEpic from "../redux/epics";

const epicMiddleware = createEpicMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(epicMiddleware)
    // composeWithDevTools(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);

export default store;

// import { composeWithDevTools } from "redux-devtools-extension";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import reducers from "./reducers";

// const store = createStore(
//     reducers,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
