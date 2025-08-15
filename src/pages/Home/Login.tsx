import {useState } from 'react'
import Alert from '../../components/Alert';
import { useNavigate } from 'react-router-dom';
import LoginUser from '../../firebase/EditUser';
import { auth, googleProvider } from '../../firebase/config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
function LoginPage(){
    const [message,setMessage]=useState("")
      const [isAlertOn,setAlert]=useState(false)
      const [email,setEmail]=useState('')
      const [password,setPassword]=useState('')
      const navigate = useNavigate();
      const signInWithGoogle=async()=>
        {
            try {
                await signInWithPopup(auth, googleProvider);
                handleAfterSignIn()
                
            } catch (error:any) {
                setMessage(error.toString())
                setAlert(true)

            }
        };
      const signInWithEmail=async(email:string,password:string)=>{
        try {
            await signInWithEmailAndPassword(auth,email,password)
            handleAfterSignIn()
            }
        catch (error:any) {
              setMessage(error.toString())
              setAlert(true)
            }
      };
      const handleAfterSignIn=()=>{
          if (auth.currentUser) {
            LoginUser(auth.currentUser)
            navigate('/dashboard')
          } else {
            setMessage("No user found after sign in.");
            setAlert(true);
          }
      }

    return (<div className='d-flex flex-column justify-content-center pageviewport align-items-center'>
      {isAlertOn && <Alert message={message} onClose={()=>setAlert(false)}/>}
      <div>
        <label className='text-start' style={{width:'100%'}}>Email</label><br></br>
        <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)}></input><br></br>
        <label className='text-start' style={{width:'100%'}}>Password</label><br></br>
        <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)}></input><br></br>
        <button className='btn btn-primary' onClick={()=>signInWithEmail(email,password)}>login</button><br></br><br></br>
        <button className='btn btn-primary bg-light' onClick={signInWithGoogle}>
          <img src='https://img.icons8.com/?size=100&id=17949&format=png&color=000000' className='logo'></img>
          signIn/signUp with google
        </button>
      </div>
      </div>
    )
}
export default LoginPage