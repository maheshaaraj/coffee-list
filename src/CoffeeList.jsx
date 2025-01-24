import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { getCoffee } from './services/getService';
// import { use } from 'react';


const CoffeeList = () => {
    const [data,setData] = useState([]);

  const fetchList = async () => {
    try {

      const res = await getCoffee();
      setData(res.data)

      console.log(res.data);
      
      
    } catch (error) {
      console.log(error.message);
      
    }
  }

    useEffect(() => {
      fetchList();
    }, []);

 
      

  return (
    <div>
      <Card coffee={data}/>
    </div>
  )
}

export default CoffeeList;
