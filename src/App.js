import Login from "./components/login"
import Register from "./components/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './style/web.css'
import NavigationBar from "./components/navbar";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Dashboard" 
        element={
        <div>
        <NavigationBar />
        <Dashboard />
        </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
