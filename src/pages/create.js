import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import "./create.css";


export default function Create() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const [categorie, setCategorie] = useState("A");
    const submitForm = () => {
        inputs.categorie = categorie
        console.log(inputs)
        axios.post('http://localhost:8000/api/user', inputs).then((res) => {
            navigate('/home');
        })
    }
    return (
        <div>
            <Navbar/>
            <div className="cr">
            <h2> Nouvel Formation </h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <table ClassName="tab">
                        <thead>
                            <tr>
                                <th> <label>Secteur</label> <br />
                                    <input type="text" name="name" className="from-control mb-2"
                                        value={inputs.name || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                                <th> <label>Categorie</label> <br />
                                    <select onChange={e => { setCategorie(e.target.value) }} name="categorie" id="">
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
                                <th>  <label>Taux horaires enseignant Min</label> <br />
                                    <input type="number" name="themin" className="from-control mb-2"
                                        value={inputs.themin || ''}
                                        onChange={handleChange}
                                    /> </th>
                                <th>  <label>Taux horaires enseignant Max</label> <br />
                                    <input type="number" name="themax" className="from-control mb-2"
                                        value={inputs.themax || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>  <label>Cout reel Horaire Min</label> <br />
                                    <input type="number" name="crhmin" className="from-control mb-2"
                                        value={inputs.crhmin || ''}
                                        onChange={handleChange}
                                    /> </th>
                                <th>   <label>Cout reel Horaire Max</label> <br />
                                    <input type="number" name="crhmax" className="from-control mb-2"
                                        value={inputs.crhmax || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>  <label>Cout reel Journalier Min</label> <br />
                                    <input type="number" name="crjmin" className="from-control mb-2"
                                        value={inputs.crjmin || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                                <th>  <label>Cout reel Journalier Max</label> <br />
                                    <input type="number" name="crjmax" className="from-control mb-2"
                                        value={inputs.crjmax || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <button type="button" onClick={submitForm} className="btn btn-info mt-2">Créer</button>
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
