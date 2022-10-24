import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../http";
import axios from "axios";
import Navbar from "./navbar";

export default function Home() {
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
            <Navbar />
            <h2> Liste des Formations <br /> <Link className="btn btn-info" to={{ pathname:"/create/"}}>Créer</Link> </h2>
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
                        <th>Action</th>
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
                            <td>
                                <Link className="btn btn-info" to={{ pathname: "/edit/" + user.id }}>Modifier</Link>
                                {/* <Link className="btn btn-primary" to={{ pathname:"/view/"+user.id }}>Voir</Link> */}
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
