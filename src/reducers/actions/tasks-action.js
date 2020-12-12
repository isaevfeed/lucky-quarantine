import {createAction} from 'redux-actions';

export const addTask = createAction('TASK_ADD');
export const completeTask = createAction('TASK_COMPLETE');
export const clearTasks = createAction('TASK_CLEAR');