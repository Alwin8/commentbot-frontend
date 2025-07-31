import { useEffect, useState } from 'react'
import Alert from '../../components/Alert';
import { useNavigate } from 'react-router-dom';
import LoginUser from '../../firebase/EditUser';
import { auth, googleProvider } from '../../firebase/config';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
function LoginPage(){
    const [message,setMessage]=useState("")
      const [isAlertOn,setAlert]=useState(false)
      const navigate = useNavigate();
      const signin=async()=>
        {
            try {
                await signInWithPopup(auth, googleProvider);
                handleSignIn()
                
            } catch (error) {
                console.log(error)
            }
        };
      const handleSignIn=()=>{
          if (auth.currentUser) {
            LoginUser(auth.currentUser)
            navigate('/dashboard')
          } else {
            setMessage("No user found after sign in.");
            setAlert(true);
          }
      }
    
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      signin();
    } else {
      handleSignIn();
    }
  });

  return () => unsubscribe();
}, []);
    return (<div className='d-flex justify-content-center pageviewport d-flex align-items-center'>
      {isAlertOn && <Alert message={message} onClose={()=>setAlert(false)}/>}
      
      </div>
    )
}
export default LoginPage