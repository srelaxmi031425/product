import logo from './logo.svg';
import './App.css';
import AddProduct from './component/AddProduct';
import SearchProduct from './component/SearchProduct';
import DeleteProduct from './component/DeleteProduct';
import ViewProduct from './component/ViewProduct';
import NavBar from './component/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (


<BrowserRouter>

<Routes>

<Route path="/" element={ <AddProduct/> }/>
<Route path="/SearchProduct" element={ <SearchProduct/> }/>
<Route path="/DeleteProduct" element={ <DeleteProduct/> }/>
<Route path="/ViewProduct" element={ <ViewProduct/> }/>







</Routes>





</BrowserRouter>









  );
}

export default App;
