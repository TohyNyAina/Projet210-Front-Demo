import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'
import Navbar from "./navbar";

export default function View(props) {
    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
        http.get('http://127.0.0.1:8000/api/user').then((res)=>{
            setInputs({
                name:res.data.name,
                categorie:res.data.categorie,
                themin:res.data.themin,
                themax:res.data.themax,
                crhmin:res.data.crhmin,
                crhmax:res.data.crhmax,
                crjmin:res.data.crjmin,
                crjmax:res.data.crjmax,
                nbr:res.data.nbr
            });
        });
    }
    return (
        <div>
            <Navbar/>
            <h2>Formation</h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
                        <h4>Secteur :</h4>
                        <p>{ inputs.name }</p>
                        <h4>Categorie :</h4>
                        <p>{ inputs.categorie }</p>
                        <h4>Taux horaires enseignant Min :</h4>
                        <p>{ inputs.themin }</p>
                        <h4>Taux horaires enseignant Max :</h4>
                        <p>{ inputs.themax }</p>
                        <h4>Cout reel Horaire Min :</h4>
                        <p>{ inputs.crhmin }</p>
                        <h4>Cout reel Horaire Max :</h4>
                        <p>{ inputs.crhmax }</p>
                        <h4>Cout reel Journalier Min :</h4>
                        <p>{ inputs.crjmin }</p>
                        <h4>Cout reel Journalier Max :</h4>
                        <p>{ inputs.crjmax }</p>
                        <h4>Nombre des participants </h4>
                        <p>{ inputs.nbr }</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
