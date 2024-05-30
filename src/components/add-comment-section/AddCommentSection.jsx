import React from 'react'
import AddComment from '../add-comment/AddComment'
import './addCommentSection.css'

function AddCommentSection({currentUser, addNewComment}) {
  return (
    <div className='add-comment-container'>
      <AddComment addNewComment={addNewComment} currentUser={currentUser}></AddComment>
    </div>
  )
}

export default AddCommentSection
