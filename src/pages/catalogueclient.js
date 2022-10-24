import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../http"
import Navbarclient from "./navbarclient";



export default function Catalogueclient() {
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
            <Navbarclient/>
            <h2> Catalogue</h2>
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
                           
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}
