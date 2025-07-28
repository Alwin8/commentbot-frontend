import { auth, googleProvider } from "../firebase/config"
import { signInWithPopup } from 'firebase/auth';
interface Props{
    onSignIn:()=>void
}
function SignInWithGoogle(PROPS:Props){
    const handleSignIn=async()=>
        {
            try {
                await signInWithPopup(auth, googleProvider);
                PROPS.onSignIn()
                
            } catch (error) {
                PROPS.onSignIn()
                console.log(error)
            }
        };
    return (
    <div>
    <button className="btn btn-light btn-lg d-flex align-items-center shadow-sm border rounded-pill px-4 py-2" onClick={handleSignIn}>
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo" className="me-2 logo"/>
        <span className="">Sign in with Google</span>
    </button>
    </div>)
}
export default SignInWithGoogle;