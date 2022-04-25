import { Menus } from "./Navi";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Agaram, Thenali, Vikatan } from "./MyComp";
import { NewAccount } from "./Signup";

const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Menus/>
        <Routes>
          <Route path="/sign" exact element={<NewAccount/>}/>
          <Route path="/second/:gopi" exact element={<Vikatan/>}/>
          <Route path="/third" exact element={<Thenali/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;