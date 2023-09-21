import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainContainer from './pages/MainConteiner';
import NarutoRouters from './components/Routes/NarutoRoute';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div >
      <Routes>
        <Route path='/*' element ={<NotFound />} />
        <Route element ={<MainContainer />} >
           <Route path='/narutoQuizes/*' element={<NarutoRouters />}/>
        </Route>
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
