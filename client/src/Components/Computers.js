import React, {useEffect,useState} from "react";
import axios from "axios"
import Computer from "./Computer";
import ComputerForm from "./ComputerForm";

const Computers = () => {

  const [computers, setComputers] = useState([]);
  useEffect(()=> {
    getComputers();
  },[])
  
  const getComputers = async () =>{
    try{
      let res = await axios.get("/api/computers");
      setComputers(res.data)
    }catch(err){
      console.log(err);
    };
  };

  const addComputers = async (computer) =>{
    try{
      let res = await axios.post("/api/computers", computer);
      setComputers([res.data, ...computers])
    }catch(err){
      console.log(err);
    };
  };

  const updateComputers = async (computer) =>{
    try {
      let res = await axios.put(`/api/computers/${computer.id}`, computer);
      let newComputers = computers.map((c) => (c.id === computer.id ? computer: c));
      setComputers(newComputers)
    } catch (err) {
      console.log(err)
    };
  };

  const deleteComputers = async (id) =>{
    try {
      await axios.delete(`/api/computers/${id}`)
      const newComputers = computers.filter((c) => (c.id !== id))
      setComputers(newComputers)
    } catch (err) {
      console.log(err)
    }
  };

  return(
    <div>
    <h1>Computers</h1>
    <ComputerForm 
    addComputers={addComputers}/>
    {computers.map((computers)=> (
      <Computer 
      updateComputers={updateComputers}
      deleteComputers={deleteComputers}
      {... computers}
      key={computers.id}
      />
    ))}
    </div>
  )
}

export default Computers;