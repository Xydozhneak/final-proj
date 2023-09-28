import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

const addScoreAction = createAction(`${moduleName}/addScoreAction`);
const devScoreAction = createAction(`${moduleName}/devScoreAction`);
const setMaximumScoreAction = createAction(`${moduleName}/setMaximumScoreAction`, (payload) => ({ payload }));
const resetScoreAction = createAction(`${moduleName}/resetScoreAction`, (payload) => ({ payload }));
const incIndexAction = createAction(`${moduleName}/incIndexAction`);
const decIndexAction = createAction(`${moduleName}/decIndexAction`);
const resetIndexAction = createAction(`${moduleName}/resetIndexAction`, (payload) => ({ payload }));

export default {
  devScoreAction,
  addScoreAction,
  setMaximumScoreAction,
  resetScoreAction,
  incIndexAction,
  decIndexAction,
  resetIndexAction,
};
