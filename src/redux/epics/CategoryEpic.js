import * as actionTypes from "../actions/types";
// import { Observable  } from "rxjs";
// import { ofType } from "redux-observable";
import { filter, mapTo, takeUntil } from 'rxjs/operators';



const fakeApi = () =>
    Observable.of({
        userId: 1,
        name: "chris",
        position: "Front-end",
        email: "chris.ho@innovatube.com"
    }).delay(3000);

export default action$ =>
    action$.pipe(
        ofType(actionTypes.CATEGORY_FETCH),
        // delay(1000), // Asynchronously wait 1000ms then continue
        mergeMap(() =>
            fakeApi()
                // .map(response => ({
                //     type: actionTypes.CATEGORY_FETCH_SUCCESS,
                //     payload: response
                // }))
            .mapTo(response => ({
                type: actionTypes.CATEGORY_FETCH_SUCCESS,
                payload: response
            }))
            .takeUntil(action$.ofType(actionTypes.CATEGORY_FETCH_FAIL))
        )
    );

// export default action$ =>
//     action$.ofType(actionTypes.CATEGORY_FETCH).mergeMap(() =>
//         fakeApi()
//             .takeUntil(Observable.timer(1000))
//             .map(response => ({
//                 type: actionTypes.CATEGORY_FETCH_SUCCESS,
//                 payload: response
//             }))
//             .takeUntil(action$.ofType(actionTypes.CATEGORY_FETCH_FAIL))
//     );

// export default action$ =>
//     action$.ofType(actionTypes.CATEGORY_FETCH).mergeMap(() =>
//         fakeApi()
//             .map(response => ({
//                 type: actionTypes.CATEGORY_FETCH_SUCCESS,
//                 payload: response
//             }))
//             .takeUntil(action$.ofType(actionTypes.CATEGORY_FETCH_FAIL))
//     );

// export const counterEpic = action$ =>
//     action$.ofType(actionTypes.INCREASE).mergeMap(() =>
//         fakeApi()
//             .takeUntil(Observable.timer(1000))
//             .map(response => ({
//                 type: actionTypes.CATEGORY_FETCH_SUCCESS,
//                 payload: response
//             }))
//             .takeUntil(action$.ofType(actionTypes.CATEGORY_FETCH_FAIL))
//     );
