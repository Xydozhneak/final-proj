import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

const filterAction = createAction(`${moduleName}/filterAction`, (payload) => ({ payload }));
const changeDificultAction = createAction(`${moduleName}/changeDificultAction`, (payload) => ({ payload }));
const addScoreAction = createAction(`${moduleName}/addScoreAction`, (payload) => ({ payload }));
const devScoreAction = createAction(`${moduleName}/addScoreAction`, (payload) => ({ payload }));

export default {
  filterAction,
  changeDificultAction,
  devScoreAction,
  addScoreAction,
};
