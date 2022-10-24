import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../http"
import Navbar from "./navbar";



export default function Catalogue() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('http://127.0.0.1:8000/api/testlara').then(res => {
            setUsers(res.data);
        })
    }

    const deleteUser = (id) => {
        http.delete(`http://127.0.0.1:8000/api/testlara/${id}`).then(res => {
            fetchAllUsers();
        })
    }

    return (
        <div>
            <Navbar/>
            <h2> Catalogue <br /> <Link className="btn btn-info" to={{ pathname:"/createcatalogue/"}}>Créer</Link> </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Secteur</th>
                        <th>Categorie</th>
                        <th>Niveau de technicité exigé</th>
                        <th>Accompagnement nécessaire</th>
                        <th>Supports</th>
                        <th>Outils de formation</th>
                        <th>Logiciels de formation</th>
                        <th>Plateformes specifique</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.categorie}</td>
                            <td>{user.niveau}</td>
                            <td>{user.accompagnement}</td>
                            <td>{user.supports}</td>
                            <td>{user.outilsformation}</td>
                            <td>{user.logiciel}</td>
                            <td>{user.plateformes}</td>
                            <td>
                                <Link className="btn btn-info" to={{ pathname: "/editcatalogue/" + user.id }}>Modifier</Link>
                               
                                <button type="button" className="btn btn-danger"
                                    onClick={() => { deleteUser(user.id) }}
                                >Supprimer</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}
