import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from './pages/login/Login'
import Register from "./pages/register/Register";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
