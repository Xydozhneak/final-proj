import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { quizesNaruto } from '../../../api/quizes/quizes';

const fetchNarutoQuize = createAsyncThunk(`${moduleName}/fetchNarutoQuize`, async (param) => {
  const response = await quizesNaruto.get(param);
  return response;
});

export default {
  fetchNarutoQuize,
};
