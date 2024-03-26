import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';

const Blog = (props) => {
  const {blogImg, blogTitle, authorImg, authorName} = props.blog;

  const handleToBookMark = props.handleToBookMark;

  return (
    <div className='blog-details'>
        <img src={blogImg} alt="" />
          <div className="bookmark">
             <div className="author-details">
                <img src={authorImg} alt="" />
                <h2>{authorName}</h2>
             </div>
           <button className='book-mark-btn' onClick={() => 
           handleToBookMark(props.blog)}>
           <FontAwesomeIcon icon={faBookmark} />
           </button>
          </div>
        <h4>{blogTitle}</h4>
        <p>#beginners   #programming</p>
        <a href='#'>Mark as read</a>
    </div>
  );
};

export default Blog;