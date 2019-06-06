import React from "react";
import Main from "./src/Main";

import { Provider } from "react-redux";
import store from "./src/redux/store";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
