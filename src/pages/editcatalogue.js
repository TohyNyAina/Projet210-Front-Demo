import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'
import Navbar from "./navbar";
import './createcatalogue.css'

export default function Editcatalogue(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    const [categorie, setCategorie] = useState("A");
    const [niveau, setNiveau] = useState("Bas");
    const [accompagnement, setAccompagnement] = useState("Bassique");
    const [supports, setSupports] = useState("Physiques");
    const [outilsformation, setOutilsformation] = useState("PC");
    const [logiciel, setLogiciel] = useState("Libres");
    const [plateformes, setPlateformes] = useState("Non");

    useEffect(() => {
        fetchUser()
    }, []);

    const fetchUser = () => {
        http.get('/testlara/' + id + '/editcatalogue').then((res) => {
            setInputs({
                name: res.data.name,
                categorie: res.data.categorie,
                niveau: res.data.niveau,
                accompagnement: res.data.accompagnement,
                supports: res.data.supports,
                outilsformation: res.data.outilsformation,
                logiciel: res.data.logiciel,
                plateformes: res.data.plateformes,
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitForm = () => {
        inputs.categorie = categorie
        inputs.niveau = niveau
        inputs.accompagnement = accompagnement
        inputs.supports = supports
        inputs.outilsformation = outilsformation
        inputs.logiciel = logiciel
        inputs.plateformes = plateformes
        http.put('/testlara/' + id, inputs).then((res) => {
            navigate('/catalogue');
        })
    }
    return (
        <div>
            <Navbar />
            <div className="cr">
                <h2>Modification Catalogue</h2>
                <div className="row">
                    <div className="col-sm-6 justify-content-center">
                        <table>
                            <thead>
                                <tr>
                                    <th> <label>Secteur</label> <br />
                                        <input type="text" name="name" className="from-control mb-2"
                                            value={inputs.name || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th> <label> Categorie </label> <br />
                                        <select onChange={e => { setNiveau(e.target.value) }} name="categorie" id="">
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                            <option value="E">E</option>
                                        </select>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>  <label> Niveau de technicité exigé</label> <br />
                                        <select onChange={e => { setCategorie(e.target.value) }} name="niveau" id="">
                                            <option value="Bas">Bas</option>
                                            <option value="Moyen">Moyen</option>
                                            <option value="Haut">Haut</option>
                                        </select>
                                    </th>
                                    <th>  <label>Accompagnement nécessaire</label> <br />
                                        <select onChange={e => { setAccompagnement(e.target.value) }} name="accompagnement" id="">
                                            <option value="Basique">Basique</option>
                                            <option value="Moyen">Moyen</option>
                                            <option value="Poussé">Poussé</option>
                                        </select>
                                    </th>
                                </tr>
                                <tr>
                                    <th>  <label>Supports</label> <br />
                                        <select onChange={e => { setSupports(e.target.value) }} name="supports" id="">
                                            <option value="Numeriques">Numeriques</option>
                                            <option value="Physiques">Physiques</option>
                                        </select>
                                    </th>
                                    <th>   <label>Outils de formation</label> <br />
                                        <select onChange={e => { setOutilsformation(e.target.value) }} name="outilsformation" id="">
                                            <option value="PC">PC</option>
                                            <option value="Connexion">Connexion</option>
                                            <option value="PC et Connexion">PC et Connexion</option>
                                        </select>
                                    </th>
                                </tr>
                                <tr>
                                    <th>  <label>Logiciels de formation</label> <br />
                                        <select onChange={e => { setLogiciel(e.target.value) }} name="logiciel" id="">
                                            <option value="Libres">Libres</option>
                                            <option value="Payants">Payants</option>
                                        </select>
                                    </th>
                                    <th>  <label>Plateformes specifique</label> <br />
                                        <select onChange={e => { setPlateformes(e.target.value) }} name="plateformes" id="">
                                            <option value="Non">Non</option>
                                            <option value="Oui">Oui</option>
                                        </select>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Modifier</button>
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
