import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';
import actions from './actions';

const narutoState = {
  quizeList: [],
  maximumScore: 0,
  score: 0,
  index: 0,

};

export const narutoQuizeRuduser = createSlice({
  name: moduleName,
  initialState: narutoState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchNarutoQuize.fulfilled, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.quizeList = payload;
      })
      .addCase(actions.addScoreAction, (state) => {
        /* eslint-disable no-param-reassign */
        state.score += 10;
      })
      .addCase(actions.devScoreAction, (state) => {
        /* eslint-disable no-param-reassign */
        state.score -= 10;
      })
      .addCase(actions.incIndexAction, (state) => {
        /* eslint-disable no-param-reassign */
        state.index += 1;
      })
      .addCase(actions.decIndexAction, (state) => {
        /* eslint-disable no-param-reassign */
        state.index -= 1;
      })
      .addCase(actions.setMaximumScoreAction, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.maximumScore = payload;
      })
      .addCase(actions.resetScoreAction, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.score = payload;
      })
      .addCase(actions.resetIndexAction, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.index = payload;
      });
  },
});

export default narutoQuizeRuduser.reducer;
