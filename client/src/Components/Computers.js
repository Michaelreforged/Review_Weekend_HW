import React, {useEffect,useState} from "react";
import axios from "axios"
import Computer from "./Computer";

const Computers = () => {

  const [computers, setComputers] = useState([]);
  useEffect(()=> {
    getComputers();
  },[])
  
  const getComputers = async () =>{
    try{
      let res = await axios.get("/api/computers");
      console.log(res.data)
      setComputers(res.data)
    }catch(err){
      console.log(err);
    };
  };

  return(
    <div>
    <h1>Computers</h1>
    {computers.map((computers)=> (
      <Computer 
      {... computers}
      key={computers.id}
      />
    ))}
    </div>
  )
}

export default Computers;