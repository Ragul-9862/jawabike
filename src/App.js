
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
