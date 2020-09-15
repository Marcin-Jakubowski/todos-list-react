import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: `tasks`,
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loadDone: true,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks.splice(index, 1);
        },
        setAllDone: state => {
            for (state.task of state.tasks) {
                state.task.done = true;
            }
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        toggleLoadDone: state => {
            state.loadDone = !state.loadDone;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks,
    toggleLoadDone,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;

export const getTaskById = (state, taskId) =>
    selectTasks(state).tasks.find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state).tasks;
    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default tasksSlice.reducer;