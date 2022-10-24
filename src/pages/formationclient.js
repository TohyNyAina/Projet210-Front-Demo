import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../http"
import axios from "axios";
import Navbarclient from "./navbarclient";

export default function Formationclient() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('http://127.0.0.1:8000/api/user').then(res => {
            setUsers(res.data);
        })
    }

    const deleteUser = (id) => {
        const res = axios.delete(`http://127.0.0.1:8000/api/user/${id}`).then(res => {
            fetchAllUsers();
        })
    }

    return (
        <div>
            <Navbarclient />
            <h2> Liste des Formations </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Secteur</th>
                        <th>Categorie</th>
                        <th>Taux horaires enseignant Min</th>
                        <th>Taux horaires enseignant Max</th>
                        <th>Cout reel Horaire Min</th>
                        <th>Cout reel Horaire Max</th>
                        <th>Cout reel Journalier Min</th>
                        <th>Cout reel Journalier Max</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.categorie}</td>
                            <td>{user.themin}</td>
                            <td>{user.themax}</td>
                            <td>{user.crhmin}</td>
                            <td>{user.crhmax}</td>
                            <td>{user.crjmin}</td>
                            <td>{user.crjmax}</td>
                           
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
        

    )
}
