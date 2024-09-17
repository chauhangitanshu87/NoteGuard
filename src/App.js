import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/NoteState';
import { Alert } from './components/Alert';

import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  return (
   <>
    <NoteState>
   <Router>
        <Navbar /> 
        <Alert message="Welcome to the Note Guard Application" />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}>
            </Route>
          <Route exact path="/about" element={ <About/>}>
         </Route> 

         <Route exact path="/login" element={<Login/>}/>
         <Route exact path="/signup" element={<Signup/>}/>
         <Route exact path="/login" element={<Logout/>}/>



        </Routes>
        </div>
      </Router>
      </NoteState>
   </>
  );
}

export default App;
