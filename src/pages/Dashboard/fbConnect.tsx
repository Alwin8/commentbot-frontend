import type { DocumentData } from "firebase/firestore"
import Progressbar from "../../components/progressbar"


interface Props{
    datalist?:DocumentData
}
function FbConnect(props:Props){
    const isAuthenticated=props.datalist?.uid!=null
     const selfUrl=import.meta.env.VITE_FRONTEND+"/dashboard"
     const client_id=import.meta.env.VITE_INSTA_CLENT_ID
     const fbRedirectLink="https://www.instagram.com/oauth/authorize?force_reauth=true&client_id="+client_id+"&redirect_uri="+selfUrl+"&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments"
    return (
        <div className="fullviewport d-grid justify-content-center">
        {!isAuthenticated && (<Progressbar></Progressbar>)}
            {!props.datalist?.isFbConnected && isAuthenticated && (
                <div className="card w-auto" style={{height:'30vh'}}>
                    <h3>Connect your instagram</h3>
                    <br/>
                    <a href={fbRedirectLink}>
                        <button className="btn btn-primary">Connect</button>
                    </a>
                </div>
            )}
            {props.datalist?.isFbConnected && (
                <>
                <div className="d-flex flex-row align-items-center justify-content-center">
                connected account:
                <div className="border rounded p-2" style={{width:'fit-content',height:'fit-content'}}>
                    <img src={props.datalist?.user_image} className="rounded logo p-1"></img>
                    {props.datalist?.user_name}
                </div>
                </div>
                <div className="card w-auto" style={{height:'30vh'}}>
                    <h3>Instagram Already connected</h3>
                    <br/>
                    <a href={fbRedirectLink}>
                        <button className="btn btn-primary">Connect Again</button>
                    </a>
                </div>
                </>
            )}
        </div>
    )
}
export default FbConnect;