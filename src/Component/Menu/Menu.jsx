import React, { useEffect, useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [blog, setBlog] = useState([]);

  useEffect( () =>{
    fetch('blog.json')
    .then(res => res.json())
    .then(data => setBlog(data))
    }, []);
  return (
    <div className='menu-container'>
         <div className="blog-container">
             <h3>Blog coming soon</h3>
         </div>
         <div className="bookmark-container">
             <h6>Bookmarked Blogs :</h6>
         </div>
    </div>
  );
};

export default Menu;