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
      })
      .addCase(actions.changeDificultAction, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.lvlType = payload;
      });
  },
});

export default quizCardReducer.reducer;
