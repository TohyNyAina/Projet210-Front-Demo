import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../http"
import Navbar from "./navbar";

export default function Tarif(){
    const[users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        http.get('http://127.0.0.1:8000/api/tarif').then(res=>{
           setUsers(res.data);
        }) 
    }

    const deleteUser = (id) => {
        http.delete(`http://127.0.0.1:8000/api/tarif/${id}`).then(res=>{
           fetchAllUsers();
        }) 
    }

    return(
        <div>
            <Navbar/>
           <h2> Vente </h2>
             <table className='table'>
                 <thead>
                     <tr>
                         <th>Sno.</th>
                         <th>Client</th>
                         <th>Secteur</th>
                         <th>Categorie</th>
                         <th>Action</th>
                     </tr>
                 </thead>
                 <tbody>
                     {users.map((user,index)=>(
                         <tr key={user.id}>
                         <td>{++index}</td>
                         <td>{user.client}</td>
                         <td>{user.name}</td>
                         <td>{user.categorie}</td>
                         <td>
                            <Link className="btn btn-info" to={{ pathname:"/editarif/"+user.id }}>Modifier</Link>
                            {/* <Link className="btn btn-primary" to={{ pathname:"/view/"+user.id }}>Voir</Link> */}
                            <button type="button" className="btn btn-danger"
                                onClick={()=>{deleteUser(user.id)}}
                                >Supprimer</button>
                         </td>
                     </tr>
                     ))}
                    
                 </tbody>
             </table> 
        </div>

    )
}