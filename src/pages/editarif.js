import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'
import Navbar from "./navbar";
import './createtarif.css';

export default function Editarif(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    const [categorie, setCategorie] = useState("A");


    useEffect(() => {
        fetchUser()
    }, []);

    const fetchUser = () => {
        http.get('/testlara/' + id + '/editcatalogue').then((res) => {
            setInputs({
                name: res.data.name,
                categorie: res.data.categorie,
                vendu: res.data.vendu,
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitForm = () => {
        
        http.put('/testlara/' + id, inputs).then((res) => {
            navigate('/tarif');
        })
    }
    return (
        <div>
            <Navbar />
            <div className="cr">
                <h2>Modification Vente</h2>
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
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>  <label>Vendu</label> <br />
                                        <input type="number" name="vendu" className="from-control mb-2"
                                            value={inputs.vendu || ''}
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
