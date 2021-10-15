import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "./AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { likePost, unlikePost } from "../actions/post.actions";
import { useDispatch } from "react-redux";

const LikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const like = () => {
    dispatch(likePost(post._id, uid));
    setLiked(true);
  };

  const unlike = () => {
    dispatch(unlikePost(post._id, uid));
    setLiked(false);
  };

  useEffect(() => {
    if (post.likers.includes(uid)) setLiked(true);
    else setLiked(false);
  }, [uid, post.likers]);

  return (
    <div className="like-container">
      {uid === null && (
        <Popup
          trigger={<img src="../img/heart.svg" alt="like" />}
          position={["bottom center", "bottom right", "bottom left"]}
          closeOnDocumentClick
        >
          <div className="popup">Connectez-vous pour aimer un post !</div>
        </Popup>
      )}
      {uid && liked === false && (
        <img src="../img/heart.svg" onClick={like} alt="like" />
      )}
      {uid && liked && (
        <img src="../img/heart-filled.svg" onClick={unlike} alt="unlike" />
      )}

      <span>{post.likers.length}</span>
    </div>
  );
};

export default LikeButton;
