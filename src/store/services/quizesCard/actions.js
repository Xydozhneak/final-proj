import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

const filterAction = createAction(`${moduleName}/filterAction`, (payload) => ({ payload }));
const changeDificultAction = createAction(`${moduleName}/changeDificultAction`, (payload) => ({ payload }));
const addScoreAction = createAction(`${moduleName}/addScoreAction`, (payload) => ({ payload }));
const devScoreAction = createAction(`${moduleName}/addScoreAction`, (payload) => ({ payload }));
const addQuizeAction = createAction(`${moduleName}/addQuizeAction`, (payload) => ({ payload }));
const addToFavouriteAction = createAction(`${moduleName}/addToFavouriteAction`, (payload) => ({ payload }));
const rmFavouriteAction = createAction(`${moduleName}/rmFavouriteAction`, (payload) => ({ payload }));

export default {
  filterAction,
  changeDificultAction,
  devScoreAction,
  addScoreAction,
  addQuizeAction,
  addToFavouriteAction,
  rmFavouriteAction,
};
