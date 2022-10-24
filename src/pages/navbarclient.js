import React from 'react'
import { Link } from 'react-router-dom'
import Esti from "./esti.png"
import './navbar.css'



export default function Navbarclient() {
    return (
        <div>
            <nav className='navbar navbar-expand navbar-dark bg-dark'>
                <div className='navbar-nav mr-auto'>


                    <img src={Esti} alt="logo" width="80px" height="50px" />


                    <li className='nav-item'>
                        <Link to={"/statisticlient"} className="nav-link">Accueil</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/formationclient"} className="nav-link">Formation</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/catalogueclient"} className="nav-link">Catalogue</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/createtarif"} className="nav-link">Faire un achat de formation</Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to={"/calendarclient"} className="nav-link">Agenda</Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to={"/"} className="nav-link">Deconnexion</Link>
                    </li>


                </div>

            </nav>
            <div>
 
            </div>

        </div>
    )
}
