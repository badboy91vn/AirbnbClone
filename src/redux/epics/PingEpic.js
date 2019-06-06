import * as actionTypes from "../actions/types";

// const pingEpic = action$ =>
//     action$
//         .ofType(actionTypes.PING)
//         .delay(3000) // Asynchronously wait 1000ms then continue
//         .mapTo({ type: actionTypes.PONG });

// export default pingEpic;

import "rxjs";
import { Observable } from "rxjs/Observable";

export const counterEpic = action$ =>
    action$.ofType(actionTypes.PING).mergeMap(
        () =>
            Observable.timer(0, 30)
                .takeUntil(Observable.timer(1000))
                .map(() => ({ type: actionTypes.PONG }))
        // .takeUntil(action$.ofType(STOP_COUNTER))
    );
