import { useEffect, useState } from 'react'
import Alert from '../../components/Alert';
import { useNavigate } from 'react-router-dom';
import LoginUser from '../../firebase/EditUser';
import { auth } from '../../firebase/config';
function LoginPage(){
    const [message,setMessage]=useState("")
      const [isAlertOn,setAlert]=useState(false)
      const navigate = useNavigate();
      const handleSignIn=()=>{
          if (auth.currentUser) {
            LoginUser(auth.currentUser)
            navigate('/dashboard')
          } else {
            setMessage("No user found after sign in.");
            setAlert(true);
          }
      }
    useEffect(()=>{
      handleSignIn()
    },[])
    return (<div className='d-flex justify-content-center pageviewport d-flex align-items-center'>
      {isAlertOn && <Alert message={message} onClose={()=>setAlert(false)}/>}
      
      </div>
    )
}
export default LoginPage