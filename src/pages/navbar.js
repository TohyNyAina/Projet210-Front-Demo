import React from 'react'
import { Link } from 'react-router-dom'
import Esti from "./esti.png"
import './navbar.css'



export default function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand navbar-dark bg-dark'>
                <div className='navbar-nav mr-auto'>


                    <img src={Esti} alt="logo" width="80px" height="50px" />


                    <li className='nav-item'>
                        <Link to={"/statistic"} className="nav-link">Accueil</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/home"} className="nav-link">Formation</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/catalogue"} className="nav-link">Catalogue</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/tarif"} className="nav-link">Vente</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/calendar"} className="nav-link">Agenda</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/"} className="nav-link">Deconnexion</Link>
                    </li>


                </div>

            </nav>
            <div>
                {/* <Routes>
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
          <Route path='/' element={<Login/>} />
        </Routes> */}
            </div>

        </div>
    )
}
