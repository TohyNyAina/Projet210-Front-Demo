import React from "react";
import { useState } from "react";
import BarChart from "./BarChart";
import { UserData } from "./Data1";




export default function Graphbarchart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "hsl(0, 0%, 71%)",
          "hsl(0, 0%, 47%)",
          "hsl(0, 100%, 90%)",
          "hsl(0, 100%, 75%)",
          "hsl(0, 20%, 50%)",
          "hsl(0, 60%, 50%)"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  return (

    <div>
     
       
         <BarChart chartData={userData} />
        

    </div>   
  );
}
