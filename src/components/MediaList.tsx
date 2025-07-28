import { useState } from "react";
import MediaListItem from "./MediaListItem";
interface Media {
    caption: string;
    thumbnail_url:string;
    timestamp:string;
    id:string;
}

interface Props{
    list: Media[]
    onSave:(commentDict:{},media_id:string)=>void
    user_id:string
}

function MediaList(props:Props){
    return (
        <div className="container">
            {props.list.map((media,index) => (
                <MediaListItem media={media} user_id={props.user_id} onSave={(commentDict,media_id)=>props.onSave(commentDict,media_id)}></MediaListItem>
            ))}
        </div>
    );
}

export default MediaList;