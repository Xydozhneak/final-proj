import axios from '../service';

const quizes = {
  get: () => axios.get('/quizes')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};
const quizesNaruto = {
  get: () => axios.get('/naruto')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { quizes, quizesNaruto };
