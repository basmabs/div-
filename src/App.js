import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import AddProduct from './components/product/AddProduct';
import List from './components/product/List';
import UpdateProduct from './components/product/UpdateProduct';
import Weather from './components/weather/Weather';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/list' element={<List />} />
          <Route path='/updateproduct/:idProduct' element={<UpdateProduct />} />
          <Route path='/weather' element={<Weather />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;