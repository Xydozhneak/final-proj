import axios from '../service';

const quizes = {
  get: () => axios.get('/quizes')
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    }),
  putFavourite: (quizeId, isFavourite) => axios.put(`/quizes/${quizeId}`, { favourite: isFavourite }),
};

const quizesNaruto = {
  get: (quize) => axios.get(`/${quize}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    }),
};

export { quizes, quizesNaruto };
