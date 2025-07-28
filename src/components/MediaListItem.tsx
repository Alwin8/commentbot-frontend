import { useEffect, useState } from "react";
import { getCommentReply } from "../firebase/ManageCommentAutomation";

interface individualMedia{
    media:Media
    onSave:(commentDict:{},media_id:string)=>void
    user_id:string
}
interface Media {
    caption: string;
    thumbnail_url:string;
    timestamp:string;
    id:string;
}
function MediaListItem(individualmedia:individualMedia){
    const media=individualmedia.media
    const [isOpen,setOpen]=useState(false)
    const [commentDict,setCommentDict]=useState({commentReplyButtonText: '', FollowText: '', commentReplyButtonUrl: '', commentReplyText: '',FollowButtonText:'',isFollowMust:true,keyword:''})
    const [isChecked,setChecked]=useState(false)
    const handleDropdownClick=async()=>{
        setOpen(!isOpen)
        const comment=await getCommentReply(media.id,individualmedia.user_id) as { commentReplyButtonText: string }
        setCommentDict(prev=>({...prev,...comment}))
    }
    const handleCommentSave=()=>{
        setCommentDict(prev=>({...prev,'isFollowMust':isChecked}));
        individualmedia.onSave(commentDict,media.id)
    }
    const handleChange=(event:React.ChangeEvent)=>{
        const textbox= event.target as HTMLInputElement
        const name=textbox.name
        setCommentDict(prev=>({...prev,[name]:textbox.value}));
    }
    return (
        <div key={media.id}>
        <div className="row rounded-top bg-light p-2">
                    <div className="col-1 d-flex justify-content-start align-items-center">
                        <img src={media.thumbnail_url} className="rounded potrait"></img>
                    </div>
                    <div className="col d-grid justify-content-start align-items-center">
                        <h6 className="mb-0" style={{height:'20px',overflow:'hidden'}}>{media.caption}</h6>
                        <small className="mb-0">{media.timestamp}</small>
                    </div>
                    <div className="col-2 d-grid justify-content-end align-items-center">
                        <button style={{backgroundColor:'transparent'}} onClick={()=>handleDropdownClick()}>
                            <img src='https://img.icons8.com/?size=100&id=2760&format=png&color=000000' className="logo"></img>
                        </button>
                    </div>
        </div>
        <div className="row p-2">
                    <div className="rounded-bottom" style={{backgroundColor:'bisque',height: isOpen ? "350px" : "0",transition: "height 0.5s ease",overflow: "hidden",}}>
                      <div className="row">
                        <div className="col-6">
                            <form className="form-group px-1 pt-2 d-grid justify-content-start">
                            <label className="form-text mx-2">Text To Send in dm</label>
                            <input type="text" className="form-control m-2" width='100px' placeholder="Text Message" name="commentReplyText" value={commentDict.commentReplyText} onChange={(event:React.ChangeEvent)=>handleChange(event)}></input>
                            <label className="form-text mx-2">Link To Send in dm</label>
                            <input type="url" className="form-control m-2" width='100px' placeholder="Url" name="commentReplyButtonUrl" value={commentDict.commentReplyButtonUrl} onChange={(event:React.ChangeEvent)=>handleChange(event)}></input>
                            <label className="form-text mx-2">Text of Button that Opens the link</label>
                            <input type="text" className="form-control m-2" width='100px' placeholder="ButtonText" name="commentReplyButtonText" value={commentDict.commentReplyButtonText} onChange={(event:React.ChangeEvent)=>handleChange(event)}></input>
                            </form>
                        </div>
                        <div className="col-6">
                            <form className="form-group px-1 pt-2 d-grid justify-content-start">
                            <label className="form-text mx-2">Keyword in comment that triggers dm</label>
                            <input type="text" className="form-control m-2" width='100px' placeholder="keyword" name="keyword" value={commentDict.keyword} onChange={(event:React.ChangeEvent)=>handleChange(event)}></input>
                            <div>
                            <label className="form-text mx-2">Is Follow needed</label>
                            <input type='checkbox' checked={commentDict.isFollowMust} onClick={()=>setCommentDict(prev=>({...prev,'isFollowMust':!commentDict.isFollowMust}))} style={{scale:'1'}}></input>
                            </div>
                            <label className="form-text mx-2">Text Message Asking to Follow</label>
                            <input type="text" disabled={!commentDict.isFollowMust} className="form-control m-2" width='100px' placeholder="Text asking to follow" name="FollowText" value={commentDict.FollowText} onChange={(event:React.ChangeEvent)=>handleChange(event)}></input>
                            <label className="form-text mx-2">Follow Button Text</label>
                            <input type="text" disabled={!commentDict.isFollowMust} className="form-control m-2" width='100px' placeholder="Follow Button Text" name="FollowButtonText" value={commentDict.FollowButtonText} onChange={(event:React.ChangeEvent)=>handleChange(event)}></input>
                            
                            </form>
                        </div>
                      </div>
                      <br/>
                      <button className="btn btn-primary" onClick={handleCommentSave}>save</button>
                    </div>
        </div>
        </div>
    )
}
export default MediaListItem