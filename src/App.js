import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/home'
import Create from './pages/create'
import Edit from './pages/edit'
import Editcatalogue from './pages/editcatalogue'
import Statistic from './pages/statistic'
import Calendar from './pages/calendar'
import Catalogue from './pages/catalogue'
import Createcatalogue from './pages/createcatalogue';
import Tarif from './pages/tarif';
import Createtarif from './pages/createtarif';
import Editarif from './pages/editarif';
import View from './pages/view';

import Login from "./pages/Login"
import Loginclient from './pages/Loginclient';
import Navbar from './pages/navbar';
import Navbarclient from './pages/navbarclient';
import Footer from './pages/footer';
import Auth from './pages/auth';
import Statisticlient from './pages/statisticlient';
import Formationclient from './pages/formationclient';
import Catalogueclient from './pages/catalogueclient';
import Venteclient from './pages/venteclient';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/loginclient' element={<Loginclient />} />
        <Route path='/' element={<Auth />} />
        <Route path='/statisticlient' element={<Statisticlient />} />
        <Route path='/formationclient' element={<Formationclient />} />
        <Route path='/catalogueclient' element={<Catalogueclient />} />
        <Route path='/calendarclient' element={<Calendar />} />
        <Route path='/venteclient' element={<Venteclient />} />

      
      </Routes>

      <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/catalogue' element={<Catalogue />} />
          <Route path='/createcatalogue' element={<Createcatalogue />} />
          <Route path='/statistic' element={<Statistic />} />
          <Route path='/tarif' element={<Tarif />} />
          <Route path='/createtarif' element={<Createtarif />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/editcatalogue/:id' element={<Editcatalogue />} />
          <Route path='/editarif/:id' element={<Editarif />} />
          <Route path='/view/:id' element={<View />} />


        </Routes>

      </div>
    <Footer/>
    </div>
  );
}

export default App;
