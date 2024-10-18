import React, {useState } from 'react'
import '../assets/css/Login.css'
import {v4 as uuidv4} from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate()
  const [ RoomID,setRoomID]=useState('')
  const [ UserName,setUserName]=useState('')

const GenerateID =(e)=>{
  e.preventDefault();
 setRoomID(uuidv4())
 toast.success('Created a new room')
}
  const Submitdata=()=>{
    (!RoomID || !UserName) ? toast.error('Please Enter RoomID and UserName ') : navigate(`/homepage/:${RoomID}`)
    console.log(RoomID)
    console.log(UserName)
  }
  const keyenter=(e)=>{
    e.code==='Enter'&& Submitdata();
  }
  return (
    <>
    <div className="login">

        <div className="login-logo col-lg-6">
            <img src="../public/images/Login Image.png" alt=" image" className='login-logo-img' />
        </div>

        <div className="bg-transparent col-lg-4 col-md-8 col-11 bg-light">
           <div className="app-logo border-1 col-11">
           </div> 
           <input type="text" 
           placeholder='RoomID'
           className='p-3 mb-3 col-11 '
           value={RoomID}
           onChange={(e)=>{setRoomID(e.target.value);}}
           onKeyUp={keyenter}
           />
           <input type="text "
           placeholder='Username'
           className='p-3 mb-3 col-11'
           value={UserName}
           onChange={(e)=>setUserName(e.target.value)}
           onKeyUp={keyenter}
            />
           <button 
           className='btn text-light fs-5 col-11 p-3 mb-3' 
           onClick={Submitdata}>
            <b>Join</b></button>
           <p className='text-center col-11'>Don't have RoomID ? &nbsp;<span onClick={GenerateID}>Genrrate Unique RoomID</span></p>
        </div>
    </div>
    
    </>
  )
}

export default Login
