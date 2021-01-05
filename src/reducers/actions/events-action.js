import {createAction} from 'redux-actions';

export const addEvent = createAction('EVENT_ADD');
export const deleteEvent = createAction('EVENT_DELETE');
export const editEvent = createAction('EVENT_EDIT');