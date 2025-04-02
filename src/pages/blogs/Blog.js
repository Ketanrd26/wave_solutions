import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { fetchBlogs } from "../../api";
import { Link } from "react-router-dom";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogs()
      .then((data) => {
        console.log(data);
        setBlogs(data.reverse().slice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div class="blogs_parent parent">
        <div class="blogs_cont cont">
          <h2>
            Blogs <span>List</span>
          </h2>

          <div class="blog_list">
            {blogs.map((item, index) => (
              <Link
                to={`/BlogView?slug=${item.slug}`}
                key={index}
                class="blog_card"
              >
                <div class="image_section">
                  <div
                    class="image bg-img-cover"
                    style={{
                      backgroundImage: `url(${item._embedded["wp:featuredmedia"][0].source_url})`,
                    }}
                  ></div>
                </div>
                <div class="content_section">
                  <h2>{item.title.rendered}</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.excerpt.rendered.slice(0, 100),
                    }}
                  ></p>
                </div>
                <div class="bottom">
                  <p>Read more</p>
                  <div class="arrow_btn"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
