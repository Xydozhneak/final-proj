import axios from 'axios';

export default axios.create({
  baseURL: 'https://64f32619edfa0459f6c6586c.mockapi.io/api/v1/',
  headers: { Accept: 'application/JSON' },
});
