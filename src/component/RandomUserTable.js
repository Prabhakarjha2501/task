import React from 'react'
import axios from 'axios';
const RandomUserTable = () => {

    cosnt [users, setusers] = useState([]);

const  adduser = async()=>{
    const user  = await axios.post("")
}

const fetchUsers = async() =>{
    try{
     
        const response = await axios.get()
    }catch(error){
        console.log(error);
    }
}

  return (
    <div>
      
    </div>
  )
}

export default RandomUserTable
