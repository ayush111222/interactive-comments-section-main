import UsersComments from "../users-comments/UsersComments";
import "./commentSection.css";

function CommentSection({
  comments,
  currentUser,
  addNewReply,
  deletePopUpWithReplyId,
  updateScore,
  updateParentAndChildContent
}) {
  return (
    <div className="comment-section-container">
      {comments.map((comment) => {
        return (
          <UsersComments
          updateParentAndChildContent={updateParentAndChildContent}
            updateScore={updateScore}
            deletePopUpWithReplyId={deletePopUpWithReplyId}
            key={comment.id}
            addNewReply={addNewReply}
            currentUser={currentUser}
            comment={comment}
          ></UsersComments>
        );
      })}
    </div>
  );
}

export default CommentSection;
