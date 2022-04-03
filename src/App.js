import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/home' element={ <Home />}/>
        <Route path='/shop' element={ <Shop />}/>
      </Routes>
    </div>
  );
}

export default App;
