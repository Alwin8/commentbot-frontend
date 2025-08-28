import { useEffect, useState } from 'react'
import logo from '../../assets/logo.jpg'
import '../Home/Home.css'
import LoginPage from './Login'
import PrivacyPolicy from './PrivacyPolicy'
import Home from './Home'
import Pricing from './Pricing'
import BlogPage from './BlogPage'
interface HomePageProps {
    page: number;
}

function HomePage({page}: HomePageProps){
    const [selectedPage,setSelectedPage]=useState(1)
    useEffect(()=>{
      setSelectedPage(page)
    },[])
    return (
    <div>
        <div className="container-fluid fullviewport">
            <div className="row bg-light rounded header" style={{ minHeight: '50px', width: '100vw' }}>
                <div className="col-3 d-flex align-items-center">
                    <img src={logo} className="rounded logo" alt="logo" />
                    &nbsp;
                    <span style={{ fontWeight: 700, color: '#D4AF37' }}>LinkBridge</span>
                </div>
                <div className="col-6 d-flex align-items-center">
                    <div className='ms-2 m-sm-1 header-item rounded p-1' onClick={()=>setSelectedPage(1)}>
                      <img src="https://img.icons8.com/?size=100&id=73&format=png&color=000000" className="rounded logo" alt="user" />
                      &nbsp;
                      <span>Home</span>
                    </div>
                    <div className='ms-2 m-sm-1 header-item rounded p-1' onClick={()=>setSelectedPage(2)}>
                      <img src="https://img.icons8.com/?size=100&id=2971&format=png&color=000000" className="rounded logo" alt="user" />
                      &nbsp;
                      <span>Pricing</span>
                    </div>
                    <div className='ms-2 m-sm-1 header-item rounded p-1' onClick={()=>setSelectedPage(3)}>
                      <img src="https://img.icons8.com/?size=100&id=LeS5bIxWv2Kc&format=png&color=000000" className="rounded logo" alt="user" />
                      &nbsp;
                      <span>Privacy Policy</span>
                    </div>
                </div>
                <div className='col-3 d-flex justify-content-end align-items-center'>
                    <div className='me-2 m-sm-1 header-item rounded' onClick={()=>setSelectedPage(4)}>
                      <img src="https://img.icons8.com/?size=100&id=26218&format=png&color=000000" className="rounded logo" alt="user" />
                      &nbsp;
                      <span>Login</span>
                    </div>
                </div>
            </div>
            <div className='row'>
                {selectedPage==1 && (<Home changePage={(page)=>setSelectedPage(page)}></Home>)}
                {selectedPage==2 && (<Pricing changePage={(page)=>setSelectedPage(page)}></Pricing>)}
                {selectedPage==3 && (<PrivacyPolicy></PrivacyPolicy>)}
                {selectedPage==4 && (<LoginPage></LoginPage>)}
                {selectedPage==5 && (<BlogPage></BlogPage>)}
            </div>
        </div>
    </div>
    )
}
export default HomePage