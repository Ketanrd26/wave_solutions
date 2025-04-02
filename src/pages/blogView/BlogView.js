import React, { useEffect, useState } from "react";
import "./BlogView.scss";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
const BlogView = () => {
  const [post, setPost] = useState([]);

  const [searchparams] = useSearchParams();

  const slug = searchparams.get("slug");
  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `https://api.wavesolutions.in/wp-json/wp/v2/posts?slug=${slug}&_embed`
      );
      setPost(response.data[0]); // Assuming the API returns an array with a single post
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  console.log(post, "post");
  return (
    <>
      <div class="blog_view_parent parent">
        <div class="blog_view_cont cont">
          <img
            src={
              post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "default-image.jpg"
            }
            alt={post?.title?.rendered || "Blog Image"}
          />
          <div class="middle_section">
            <h1>{post?.title?.rendered}</h1>
            <p>{post?.date?.split("T")[0]}</p>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: post?.content?.rendered,
            }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default BlogView;
