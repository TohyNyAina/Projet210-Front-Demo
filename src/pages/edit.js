import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'
import Navbar from "./navbar";
import './create.css'

export default function Edit(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    const [categorie, setCategorie] = useState("A");

    useEffect(() => {
        fetchUser()
    }, []);

    const fetchUser = () => {
        http.get('/users/' + id + '/edit').then((res) => {
            setInputs({
                name: res.data.name,
                categorie: res.data.categorie,
                themin: res.data.themin,
                themax: res.data.themax,
                crhmin: res.data.crhmin,
                crhmax: res.data.crhmax,
                crjmin: res.data.crjmin,
                crjmax: res.data.crjmax,
               
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
        http.put('/users/' + id, inputs).then((res) => {
            navigate('/home');
        })
    }
    return (
        <div>
            <Navbar />
            <div className="cr">
                <h2>Modification Formation</h2>
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
                                        <input type="text" name="themin" className="from-control mb-2"
                                            value={inputs.themin || ''}
                                            onChange={handleChange}
                                        /> </th>
                                    <th>  <label>Taux horaires enseignant Max</label> <br />
                                        <input type="text" name="themax" className="from-control mb-2"
                                            value={inputs.themax || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                </tr>
                                <tr>
                                    <th>  <label>Cout reel Horaire Min</label> <br />
                                        <input type="text" name="crhmin" className="from-control mb-2"
                                            value={inputs.crhmin || ''}
                                            onChange={handleChange}
                                        /> </th>
                                    <th>   <label>Cout reel Horaire Max</label> <br />
                                        <input type="text" name="crhmax" className="from-control mb-2"
                                            value={inputs.crhmax || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                </tr>
                                <tr>
                                    <th>  <label>Cout reel Journalier Min</label> <br />
                                        <input type="text" name="crjmin" className="from-control mb-2"
                                            value={inputs.crjmin || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th>  <label>Cout reel Journalier Max</label> <br />
                                        <input type="text" name="crjmax" className="from-control mb-2"
                                            value={inputs.crjmax || ''}
                                            onChange={handleChange}
                                        />
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
