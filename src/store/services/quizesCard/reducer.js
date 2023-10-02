import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import actions from './actions';
import thunks from './thunks';

const initialState = {
  quizes: [],
  filter: '',
  filtredCard: [],
  lvlType: 20,
  score: 0,
  maximumScore: null,
  favouriteList: [],
};

export const quizCardReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.filterAction, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.filter = payload;
        /* eslint-disable no-param-reassign */
        state.filtredCard = state.quizes.filter((quize) => {
          const quizeInitial = quize.title.toLowerCase();
          return quizeInitial.includes(payload.toLowerCase());
        });
      })
      .addCase(thunks.fetchQuize.fulfilled, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.quizes = payload;
        state.favouriteList = state.quizes.filter((quize) => quize.favourite);
      })
      .addCase(thunks.postQuize.fulfilled, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.quizes = [...state.quizes, payload];
      })
      .addCase(actions.changeDificultAction, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.lvlType = payload;
      })
      .addCase(actions.addToFavouriteAction, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.favouriteList = [...state.favouriteList, payload];
      })
      .addCase(actions.rmFavouriteAction, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.favouriteList = state.favouriteList.filter((item) => item.id !== payload.id);
      });
  },
});

export default quizCardReducer.reducer;
