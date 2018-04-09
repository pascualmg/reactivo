import React from 'react';

function formatDate(date)
{
  return date;
}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
const CommentComponent =
  <Comment
    author={{avatarUrl: "algo.com", name: "passh"}}
    text={"cosas"}
  />;

export default CommentComponent;
