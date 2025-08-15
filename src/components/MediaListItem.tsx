import { useState } from "react";
import { getcommentDm } from "../firebase/ManageCommentAutomation";

interface individualMedia {
  media: Media;
  onSave: (commentDict: {}, media_id: string) => void;
  user_id: string;
}
interface Media {
  caption: string;
  thumbnail_url: string;
  timestamp: string;
  id: string;
}
function MediaListItem(individualmedia: individualMedia) {
  const media = individualmedia.media;
  const [isOpen, setOpen] = useState(false);
  const [commentDict, setCommentDict] = useState({
    commentDmButtonText: "",
    FollowText: "",
    commentDmButtonUrl: "",
    commentDmText: "",
    FollowButtonText: "",
    isFollowMust: true,
    keyword: "",
    isDmNeeded: false,
    isReplyNeeded:false,
    replyText:""
  });
  const isSmallPhone = window.innerWidth <= 480;
  const handleDropdownClick = async () => {
    setOpen(!isOpen);
    const comment = (await getcommentDm(
      media.id,
      individualmedia.user_id
    )) as { commentDmButtonText: string };
    setCommentDict((prev) => ({ ...prev, ...comment }));
  };
  const handleCommentSave = () => {
    setCommentDict((prev) => ({
      ...prev,
      isFollowMust: commentDict.isFollowMust,
    }));
    individualmedia.onSave(commentDict, media.id);
  };
  const handleChange = (event: React.ChangeEvent) => {
    const textbox = event.target as HTMLInputElement;
    const name = textbox.name;
    setCommentDict((prev) => ({ ...prev, [name]: textbox.value }));
  };
  // start
  return (
<div key={media.id}>
    {/*media item start*/}
    <div className="row rounded-top bg-light p-2">
        <div className="col-auto d-flex justify-content-start align-items-center">
          <img src={media.thumbnail_url} className="rounded potrait"></img>
        </div>
        <div className="col d-grid justify-content-start align-items-center">
          <h6 className="mb-0" style={{ height: "20px", overflow: "hidden" }}>
            {media.caption}
          </h6>
          <small
            className="mb-0"
            style={{ height: "16px", overflow: "hidden"}}
          >
            {media.timestamp}
          </small>
        </div>
        <div className="col-1 d-grid justify-content-end align-items-center">
          <button style={{ backgroundColor: "transparent" }} onClick={() => handleDropdownClick()}>
            <img src="https://img.icons8.com/?size=100&id=2760&format=png&color=000000" className="logo"></img>
          </button>
        </div>
    {/*media item end*/}
    </div>
      {/*dropdown start*/}
    <div className="row p-2">
      <div
        className="card-smal"
        style={{
        backgroundColor: "#EFEFF0",
        transition: "all 0.4s ease",
        maxHeight: isOpen ? "800px":"0px",
        opacity: isOpen ? "1" : "0.5",
        padding: isOpen ? "16px" : "0px",
        overflow: "hidden",
          }}>
        <div>
        <div>
            <input
            type="checkbox"
            checked={commentDict.isDmNeeded}
            onClick={() =>
            setCommentDict((prev) => ({...prev,isDmNeeded: !commentDict.isDmNeeded,}))}
            ></input>
            <label className="form-text">Enable Dm to Comment</label>
        </div>
        <div className="row" 
          style={{
            display:commentDict.isDmNeeded ? "flex" : "none"
        }}>
            <div className="col-sm-6 d-flex justify-content-center">
              <form className="form-group px-1 pt-2 d-grid justify-content-start">
                <label className="form-text mx-2">Text To Send in dm</label>
                <input
                  type="text"
                  className="form-control m-2"
                  width="100px"
                  placeholder="Text Message"
                  name="commentDmText"
                  value={commentDict.commentDmText}
                  onChange={(event: React.ChangeEvent) => handleChange(event)}
                  disabled={!commentDict.isDmNeeded}
                ></input>
                <label className="form-text mx-2">Link To Send in dm</label>
                <input
                  type="url"
                  className="form-control m-2"
                  width="100px"
                  placeholder="Url"
                  name="commentDmButtonUrl"
                  value={commentDict.commentDmButtonUrl}
                  onChange={(event: React.ChangeEvent) => handleChange(event)}
                  disabled={!commentDict.isDmNeeded}
                ></input>
                <label className="form-text mx-2">Text of Button that Opens the link</label>
                <input
                  type="text"
                  className="form-control m-2"
                  width="100px"
                  placeholder="ButtonText"
                  name="commentDmButtonText"
                  value={commentDict.commentDmButtonText}
                  onChange={(event: React.ChangeEvent) => handleChange(event)}
                  disabled={!commentDict.isDmNeeded}
                ></input>
              </form>
            </div>
            <div className="col-sm-6 d-flex justify-content-center">
              <form className="form-group px-1 pt-2 d-grid justify-content-start">
                <label className="form-text mx-2">Keyword in comment that triggers dm</label>
                <input
                  type="text"
                  className="form-control m-2"
                  width="100px"
                  placeholder="keyword"
                  name="keyword"
                  value={commentDict.keyword}
                  onChange={(event: React.ChangeEvent) => handleChange(event)}
                  disabled={!commentDict.isDmNeeded}
                ></input>
                <div>
                  <label className="form-text mx-2">Is Follow needed</label>
                  <input
                    type="checkbox"
                    checked={commentDict.isFollowMust}
                    onClick={() =>
                      setCommentDict((prev) => ({
                        ...prev,
                        isFollowMust: !commentDict.isFollowMust,
                      }))
                    }
                    style={{ scale: "1" }}
                    disabled={!commentDict.isDmNeeded}
                  ></input>
                </div>
                <label className="form-text mx-2">
                  Text Message Asking to Follow
                </label>
                <input
                  type="text"
                  disabled={!commentDict.isFollowMust || !commentDict.isDmNeeded}
                  className="form-control m-2"
                  width="100px"
                  placeholder="Text asking to follow"
                  name="FollowText"
                  value={commentDict.FollowText}
                  onChange={(event: React.ChangeEvent) => handleChange(event)}
                ></input>
                <label className="form-text mx-2">Follow Button Text</label>
                <input
                  type="text"
                  disabled={
                    !commentDict.isFollowMust || !commentDict.isDmNeeded
                  }
                  className="form-control m-2"
                  width="100px"
                  placeholder="Follow Button Text"
                  name="FollowButtonText"
                  value={commentDict.FollowButtonText}
                  onChange={(event: React.ChangeEvent) => handleChange(event)}
                ></input>
              </form>
            </div>
            </div>
        <div className="row">
                {/*reply start*/}
            <div>
              <input
                type="checkbox"
                checked={commentDict.isReplyNeeded}
                onClick={() =>
                  setCommentDict((prev) => ({
                    ...prev,
                    isReplyNeeded: !commentDict.isReplyNeeded,
                  }))
                }
              ></input>
              <label className="form-text">Enable reply to Comment</label>
            </div>
            <div className="col-4"></div>
            <div
            style={{display:commentDict.isReplyNeeded ? "initial" : "none", textAlign:'left'}} 
            className="col-4">
                <label className="form-text mx-3">Reply Text</label>
                <input
                  type="text"
                  disabled={
                    !commentDict.isReplyNeeded
                  }
                  className="form-control m-2"
                  width="50px"
                  placeholder="Reply Text"
                  name="replyText"
                  value={commentDict.replyText}
                  onChange={(event: React.ChangeEvent) => handleChange(event)}
                ></input>
            </div>
            {/*reply end*/}
        </div>
          <br />
          <button className="btn btn-primary" onClick={handleCommentSave}>
            save
          </button>
          {/*dropdown end*/}
      </div>
      </div>
    </div>
</div>
  );
}
export default MediaListItem;
