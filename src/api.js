import axios from "axios";

export const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://api.wavesolutions.in/wp-json/wp/v2/posts?_embed"
      );
      const data = response.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  };