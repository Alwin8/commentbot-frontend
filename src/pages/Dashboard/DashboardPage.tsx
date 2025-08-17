import logo from '../../assets/logo.jpg'
import './dashboard.css'
import { type DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import GetUser from "../../firebase/GetUserData";
import FbConnect from './fbConnect';
import { useSearchParams } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import NavBar from '../../components/navBar';
import CommentAutomation from './CommentAutomation';
import createUserInDatabase, {updateUser } from '../../firebase/EditUser';
import makeToken from '../../api/TokenMakerApi';
import PlanPage from './PlanPage';
function Dashboard(){
    const [dataList, setDataList] = useState<DocumentData>();
    const [SelectedItem, setSelectedItem] = useState(0);

     const [searchParams] = useSearchParams();
     const code = searchParams.get("code");
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await createUserInDatabase(user)
        if(code!=null){
          const token=await makeToken(code)
          if(token!="error"){
            updateUser(user,token[0],token[1],token[2],token[3])
          }else{
            alert('error')
          }
        }
        const userdata = await GetUser(); // You can pass the user
        setDataList(userdata);
      } else {
        setDataList([]); // Clear data if signed out
      }
    },);

    return () => unsubscribe(); // Cleanup the listener
  }, []);
    return (
        <div className="container-fluid fullviewport">
            <div className="row card-smal" style={{ minHeight: '50px', width: '100vw' }}>
                <div className="col-6 d-flex align-items-center">
                    <img src={logo} className="rounded logo" alt="logo" />
                    &nbsp;
                    <span style={{ fontWeight: 700, color: '#D4AF37' }}>LinkBridge</span>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end">
                    <img src={dataList?.photoURL} className="rounded logo" alt="user" />
                    &nbsp;
                    <span>{dataList?.name}</span>
                </div>
            </div>
            <div className='row mt-0'>
                <div className='col-2'>
                    <NavBar list={['Connect instagram','Comment Automation','Plan']} onSelect={(id)=>setSelectedItem(Number(id))}></NavBar>
                </div>
                <div className="col-10 my-5 d-flex justify-content-center align-items-center">
                    {SelectedItem==0 && <FbConnect datalist={dataList}/>}
                    {SelectedItem==1 && <CommentAutomation token={dataList?.token} user_id={dataList?.user_id}/>}
                    {SelectedItem==2 && <PlanPage/>}
                </div>
            </div>
            </div>)
};

export default Dashboard;
