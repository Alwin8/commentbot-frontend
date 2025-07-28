import { useState } from 'react'
import SignInWithGoogle from '../../components/signinwithgoogle';
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
    return (<div className='d-flex justify-content-center pageviewport d-flex align-items-center'>
      {isAlertOn && <Alert message={message} onClose={()=>setAlert(false)}/>}
      <SignInWithGoogle onSignIn={()=>{handleSignIn()}}></SignInWithGoogle>
      </div>
    )
}
export default LoginPage