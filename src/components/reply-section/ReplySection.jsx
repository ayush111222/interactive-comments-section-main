import React, { useState } from "react";
import "./replySection.css";
import ReplyUserComment from "../reply-user-comment/ReplyUserComment";

function ReplySection({
  replies,
  currentUser,
  addNewReply,
  deletePopUpWithReplyId,
  incrementScore,
  decrementScore,
  comment,
  updateParentAndChildContent
}) {
  return (
    <div className="reply-comment-section-container">
      {replies.map((reply) => {
        return (
          <ReplyUserComment
          updateParentAndChildContent={updateParentAndChildContent}
            comment={comment}
            decrementScore={decrementScore}
            incrementScore={incrementScore}
            deletePopUpWithReplyId={deletePopUpWithReplyId}
            reply={reply}
            addNewReply={addNewReply}
            key={reply.id}
            currentUser={currentUser}
          ></ReplyUserComment>
        );
      })}
    </div>
  );
}

export default ReplySection;
