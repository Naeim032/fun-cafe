import React, { useEffect, useState } from 'react';
import './Menu.css';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Menu = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMark, setBookMark] = useState([])

  useEffect( () =>{
    fetch('blog.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
    }, []);

    const handleToBookMark = (blog) =>{
      const newBookMark = [...bookMark, blog]
      setBookMark(newBookMark)
   }

  return (
    <div className='menu-container'>
         <div className="blog-container">
             {
              blogs.map(blog => <Blog
              key = {blog.id}
              blog = {blog}
              handleToBookMark = {handleToBookMark}
              ></Blog>)
             }
         </div>
         <div className="bookmark-container">
              <Bookmark
               bookMark = {bookMark}
              ></Bookmark>
         </div>
    </div>
  );
};

export default Menu;