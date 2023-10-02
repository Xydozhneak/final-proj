import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { quizes } from '../../../api/quizes/quizes';

const fetchQuize = createAsyncThunk(`${moduleName}/fetchQuize`, async () => {
  const response = await quizes.get();
  return response;
});
const postQuize = createAsyncThunk(`${moduleName}/postQuize`, async (quize) => {
  await quizes.post(quize);
});

export default {
  fetchQuize, postQuize,
};
