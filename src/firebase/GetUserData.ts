import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./config";

const GetUser=async ()=>{
        const userRef = doc(db, "usersWeb", ""+auth.currentUser?.uid);
        const user=await getDoc(userRef);
        return user.data()
    }
export default GetUser;