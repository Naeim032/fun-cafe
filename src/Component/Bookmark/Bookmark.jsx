import React from 'react';
import './bookmark.css';

const Bookmark = (props) => {
  const bookMark = props.bookMark;
  let totalBook = [];
  for (const book of bookMark){
    totalBook = book + book.blogTitle;
    console.log(totalBook)
  }
  return (
    <div className='read-book'>
         <h6>Bookmarked Blogs : {bookMark.length}</h6>
         <p>{totalBook}</p>
    </div>
  );
};

export default Bookmark;