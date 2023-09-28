import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quizCardReducer from './services/quizesCard/reducer';
import narutoQuizeRuduser from './services/quizes/reducer';

const rootReducer = combineReducers({
  quizCardReducer,
  narutoQuizeRuduser,
});

const store = configureStore({ reducer: rootReducer });

export default store;
