import { takeEvery, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, toggleLoadDone } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
    try {
        yield put(toggleLoadDone());
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
        yield put(toggleLoadDone());
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler)
}