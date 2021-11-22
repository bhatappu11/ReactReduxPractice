import './App.css';
import Users from './component/Users';
// // import { BrowserRouter as Router, Switch, Routes } from "react-router-dom";
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <h1>Redux Tutorial</h1>
       <Users />
       {/* <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} ></Route>
            <Route exact path="/users" element={<Users />} ></Route>
          </Routes>
       </BrowserRouter> */}
    </div>
  );
}

export default App;
