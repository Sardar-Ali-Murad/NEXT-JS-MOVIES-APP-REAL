import React from 'react'
import axios from 'axios'
import { useAppContext } from '../context/state'


const testing = (props) => {
    let [result,setResult]=React.useState({})
    // let props=useAppContext()
    console.log()
    React.useEffect(()=>{
      const data = async () => {
      let data=await fetch('http://localhost:5000/api/v1/auth/login',{
       method: 'POST',
       body: JSON.stringify({name:"saradr"}),
        headers: {
         'Content-Type': 'application/json'
      }})
      let jsonData=await data.json()
      console.log(jsonData)
      setResult(jsonData)
     }
     data()
    },[])
   
  return (
    <div>
        {/* <h2>{result.name}</h2> */}
        thsisi
    </div>
  )
}


export default testing
