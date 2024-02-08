
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Pages/HomePage';
import Editable from './Components/Editable';
import Blogsnew from './Components/Blogsnew';
import Editterr from './Components/Editterr';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<HomePage/>}/> */}
       <Route path='/' element={<Blogsnew/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
