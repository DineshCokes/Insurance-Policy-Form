import React from 'react'
import { Menu } from './Navi';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Agaram, Thenali, Vikatan } from './MyComp';


function App()
 {
  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' exact element={<Agaram/>}/>
      <Route path='/first/:gopi' exact element={<Vikatan/>}/>
      <Route path='/second' exact element={<Thenali/>}/>


    </Routes>
    </BrowserRouter>

    </>
   
  );
}

export default App;
