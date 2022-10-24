import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import http from '../http'
import Navbarclient from "./navbarclient";
import "./createtarif.css";

export default function Createtarif() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const [name, setName] = useState("Transversale")
    const [categorie, setCategorie] = useState("A")
    
    const submitForm = () => {
        inputs.name = name
        inputs.categorie = categorie
        axios.post('http://127.0.0.1:8000/api/tarif', inputs).then((res) => {
            navigate('/venteclient');
        })
    }
    return (
        <div>
            <Navbarclient />
            <div className="cr">
                <h2></h2>
                <div className="row">
                    <h1>Faite votre commande</h1>
                    <div className="col-sm-6 justify-content-center">
                        <table>
                            <thead>
                                <tr>
                                    <th> <label>Votre nom</label> <br />
                                        <input type="text" name="client" className="from-control mb-2"
                                            value={inputs.client || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th> <label> Secteur </label> <br />
                                        <select onChange={e => { setName(e.target.value) }} name="categorie" id="">
                                            <option value="Transversale">Transversale</option>
                                            <option value="Programmation">Programmation</option>
                                            <option value="Administration systemes et réseaux">Administration systemes et réseaux</option>
                                            <option value="Gestion de projets">Gestion de projets</option>
                                            <option value="Sécurité">Sécurité</option>
                                            <option value="Informatique décisionnelle/ Marketing Digital">Informatique décisionnelle/ Marketing Digital</option>
                                        </select>
                                    </th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th> <label> Categorie </label> <br />
                                        <select onChange={e => { setCategorie(e.target.value) }} name="categorie" id="">
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                        </select>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Acheter</button>
                                    </th>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}