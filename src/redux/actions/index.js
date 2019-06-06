import * as types from "./types";

// export const categoryFetch = () => ({ type: types.CATEGORY_FETCH });

export const ping = () => ({ type: types.PING });

const fakeDataApi = () =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve([
                {
                    imageURI: require("../../images/1.jpg"),
                    title: "Russ 1"
                },
                {
                    imageURI: require("../../images/2.jpg"),
                    title: "Russ 2"
                },
                {
                    imageURI: require("../../images/3.jpg"),
                    title: "Russ 3"
                },
                {
                    imageURI: require("../../images/4.jpg"),
                    title: "Russ 4"
                }
            ]);
        }, 2000)
    );
// export const categoryFetch = () => async dispatch => {
//     dispatch({
//         type: types.CATEGORY_FETCH,
//         payload: { isLoad: true }
//     });
//     const data = await fakeDataApi();
//     dispatch({
//         type: types.CATEGORY_FETCH_SUCCESS,
//         payload: { isLoad: false, data: data }
//     });
// };
