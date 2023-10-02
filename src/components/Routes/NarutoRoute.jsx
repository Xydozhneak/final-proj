import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContainerQuize from '../ContainerQuize';
import NotFound from '../NotFound/NotFound';
import NarutoQuizesPage from '../../pages/QuizesPages/NarutoQuiezPage';
import FavouriteQuizes from '../../pages/FafouriteQuize';
import CreateQuize from '../../pages/CreateQuize';

export default function NarutoRouters() {
  return (
        <Routes>
            <Route path='/*' element ={<NotFound />} />
            <Route path='/' element={<ContainerQuize />} />
            <Route path='/:quize' element={<NarutoQuizesPage/>} />
            <Route path='/create' element={<CreateQuize/>} />
            <Route path='/favourite' element={ <FavouriteQuizes />} />
        </Routes>
  );
}
