import React from "react";
import "./Blog.scss";
const Blog = () => {
  return (
    <>
      <div class="blogs_parent parent">
        <div class="blogs_cont cont">

        <h2>Blogs <span>List</span></h2>

        <div class="blog_list">
        <div class="blog_card">
              <div class="image_section">
                <div class="image bg-img-cover"></div>
              </div>
              <div class="content_section">
                <h2>Five ways that can develop your business website</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, necessitatibus. Labore molestiae facilis suscipit
                  Accusantium, necessitatibus. Labore molestiae facilis suscipit
                </p>
              </div>
              <div class="bottom">
                <p>Read more</p>
                <div class="arrow_btn"></div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
