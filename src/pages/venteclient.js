import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../http"
import Navbarclient from "./navbarclient";

export default function Venteclient(){
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
            <Navbarclient/>
           <h2> Votre achat a ete effectué avec succes <br /> <h4>Liste des acheteurs</h4> </h2>
             <table className='table'>
                 <thead>
                     <tr>
                         <th>Sno.</th>
                         <th>Client</th>
                         <th>Secteur</th>
                         <th>Categorie</th>
                         
                     </tr>
                 </thead>
                 <tbody>
                     {users.map((user,index)=>(
                         <tr key={user.id}>
                         <td>{++index}</td>
                         <td>{user.client}</td>
                         <td>{user.name}</td>
                         <td>{user.categorie}</td>
                         
                     </tr>
                     ))}
                    
                 </tbody>
             </table> 
        </div>

    )
}