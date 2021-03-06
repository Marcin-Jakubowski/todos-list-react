import { takeEvery, takeLatest, call, put, delay, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks, toggleLoadDone } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield put(toggleLoadDone());
        yield delay(500);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
        yield put(toggleLoadDone());
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
        yield put(toggleLoadDone());
    }
}

function* saveTasksInLocalStorageHandler() {
    const {tasks} = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}