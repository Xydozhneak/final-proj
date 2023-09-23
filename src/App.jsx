import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import MainContainer from './pages/MainConteiner';
import NarutoRouters from './components/Routes/NarutoRoute';
import NotFound from './components/NotFound/NotFound';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
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
    </Provider>
  );
}

export default App;
