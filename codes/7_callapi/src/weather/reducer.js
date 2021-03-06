/* eslint-disable import/no-anonymous-default-export */
import * as Status from './status.js';
import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes.js';

export default (state = { status: Status.LOADING }, action) => {
    switch (action.type) {
        case FETCH_STARTED: {
            return { status: Status.LOADING };
        }
        case FETCH_SUCCESS: {
            return {
                ...state, status: Status.SUCCESS, ...action.result
            };
        }
        case FETCH_FAILURE:{
            return {
                ...state,status:Status.FAILURE,...action.error
            }
        }
        default:{
            return state;
        }
    }
}