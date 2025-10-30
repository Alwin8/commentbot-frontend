import { useEffect, useState } from "react";
import MediaList from "../../components/MediaList";
import Progressbar from "../../components/progressbar";
import GetMedia from "../../api/GetMedia";
import AddCommentAutomation from "../../firebase/ManageCommentAutomation";
import Alert from "../../components/Alert";
interface Props {
  token: string;
  user_id: string;
}
function CommentAutomation(props: Props) {
  const [isLoading, setLoading] = useState(false);
  const [noMedia, setNoMedia] = useState(false);
  const [medialist, setMediaList] = useState([]);
  const [page, setPage] = useState([""]);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    const run = async () => {
      if(!isLoading){
      setLoading(true);
      const media = await GetMedia(props.token, page[pageNo - 1]);
      if(media.data.length==0){
        console.log("empty")
        setLoading(false);
        setNoMedia(true)
        return
      }
      setMediaList(media.data);
      const after: string = media.paging.cursors["after"];
      setPage((prev) => [...prev, after]);
      setLoading(false);
      }
    };
    run();
  }, [pageNo]);
  return (
    <div className="fullviewport">
      
        <MediaList
        list={medialist}
        user_id={props.user_id}
        onSave={(commentDict, media_id) =>
          AddCommentAutomation(commentDict, media_id, props.user_id)
        }
      />
      {isLoading && <Progressbar></Progressbar>}
      {noMedia && <Alert message="No media Found" onClose={()=>{}}></Alert>}
      <div className="row">
            <div className="col">
                <button className="btn btn-light" onClick={()=>pageNo>1 && setPageNo(pageNo-1)}>Prev Page</button>
                <label className="text text-dark m-3">{pageNo}</label>
                <button className="btn btn-light" onClick={()=>setPageNo(pageNo+1)}>Next Page</button>
            </div>
        </div>
    </div>
  );
}
export default CommentAutomation;
