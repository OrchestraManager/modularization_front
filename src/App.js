import './App.css';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import {Login} from './Domain/Authentication/Login.js';
import {Font} from './Common/font/Font.js';
import { Signup } from './Domain/Authentication/Signup.js';
import { AuthRoute } from './Domain/Authentication/AuthRoute.js';
import { Main } from "./Domain/Main/Main.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element  = {<Login/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path="/main" element={<AuthRoute component={Main} />} />
          <Route path = "/test/font" element  = {<Font/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
