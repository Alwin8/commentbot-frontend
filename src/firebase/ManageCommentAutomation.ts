import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./config";
function AddCommentAutomation(commentDict:{},media_id:string,insta_id:string){
    const userRef = doc(db, "users", insta_id,'media',media_id);
    setDoc(userRef,commentDict,{merge:true})
}
export const getcommentDm=async(media_id:string,insta_id:string)=>{
    const userRef = doc(db, "users", insta_id,'media',media_id);
    const user=await getDoc(userRef);
    return user.data()
}
export default AddCommentAutomation