import React from 'react'
import { useAppContext } from '../context/state'
import { useRouter } from 'next/router'


const home = () => {
    let props=useAppContext()
    const router = useRouter()
    
    setTimeout(()=>{
        if(props.user===null){
          router.push('/register')
        }
      },2000)

      console.log(props)
  return (
    <div>
      This is home Page
      <p>{props?.user?.name}</p>
      <p>{props?.user?.email}</p>
      <button onClick={()=>props.logoutUser()}>Logout</button>
    </div>
  )
}

export default home
