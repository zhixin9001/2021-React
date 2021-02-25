import { ALL, COMPLETED, NOT_COMPLETED } from './actionTypes.js';

export const setAll = () => ({
  type: ALL
});

export const setCompleted = () => ({
  type: COMPLETED
});

export const setNotCompleted = () => ({
  type: NOT_COMPLETED
});