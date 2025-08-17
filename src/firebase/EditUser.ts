import type { User } from "firebase/auth";
import { db } from "./config";
import {doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
async function createUserInDatabase(user:User) {
  const userRef = doc(db, "usersWeb", user.uid);
  const docSnap = await getDoc(userRef);
  if(!docSnap.exists()){
      setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      isFbConnected:false,
      createdAt: serverTimestamp(), // only set once
    });
  }
  }
export const updateFbConnection=(user:User)=>{
  const userRef = doc(db, "usersWeb", user.uid);
  updateDoc(userRef,{'isFbConnected':true})
}
export const updateFbToken=(user:User,token:string)=>{
  const userRef = doc(db, "usersWeb", user.uid);
  setDoc(userRef,{'token':token},{merge:true})
}
export const updateFbUserId=(user:User,user_id:string)=>{
  const userRef = doc(db, "usersWeb", user.uid);
  setDoc(userRef,{'user_id':user_id},{merge:true})
}
export const updateUser=(user:User,token:string,user_id:string,user_name:string,user_image:string)=>{
  const userRef = doc(db, "usersWeb", user.uid);
  setDoc(userRef,{'token':token,'user_id':user_id,'user_name':user_name,'user_image':user_image,'isFbConnected':true},{merge:true})
}
export default createUserInDatabase;