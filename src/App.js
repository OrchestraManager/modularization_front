import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Authentication/Login.js';
import { Font } from './assets/fonts/Font.js';
import { Signup } from './pages/Authentication/Signup.js';
import { AuthRoute } from './pages/Authentication/AuthRoute.js';
import { Main } from "./pages/Main/Main.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<AuthRoute component={Main} />} />
          <Route path="/test/font" element={<Font />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
