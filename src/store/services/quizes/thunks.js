import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { quizesNaruto } from '../../../api/quizes/quizes';

const fetchNarutoQuize = createAsyncThunk(`${moduleName}/fetchNarutoQuize`, async () => {
  const response = await quizesNaruto.get();
  return response;
});

export default {
  fetchNarutoQuize,
};
