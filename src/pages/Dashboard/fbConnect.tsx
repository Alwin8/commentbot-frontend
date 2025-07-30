import Progressbar from "../../components/progressbar"


interface Props{
    isFbConnected:boolean
    isAuthenticated:boolean
}
function FbConnect(props:Props){
     const selfUrl=import.meta.env.VITE_FRONTEND+"/dashboard"
     const fbRedirectLink="https://www.instagram.com/oauth/authorize?force_reauth=true&client_id=1063855271249467&redirect_uri="+selfUrl+"&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights"
    return (
        <div className="fullviewport d-grid justify-content-center">
        {!props.isAuthenticated && (<Progressbar></Progressbar>)}
            {!props.isFbConnected && props.isAuthenticated && (
                <div className="card w-auto" style={{height:'30vh'}}>
                    <h3>Connect your instagram</h3>
                    <br/>
                    <a href={fbRedirectLink}>
                        <button className="btn btn-primary">Connect</button>
                    </a>
                </div>
            )}
            {props.isFbConnected && (
                <div className="card w-auto" style={{height:'30vh'}}>
                    <h3>Instagram Already connected</h3>
                    <br/>
                    <a href={fbRedirectLink}>
                        <button className="btn btn-primary">Connect Again</button>
                    </a>
                </div>
            )}
        </div>
    )
}
export default FbConnect;