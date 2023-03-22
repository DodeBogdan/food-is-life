import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Post from "./../post/Post";

const MainPage = () => {
  const url = "https://course-api.com/react-tours-project";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postList, setPostList] = useState([]);

  const refreshPosts = () => {
    // data fetching here
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setPostList(actualData);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    refreshPosts();
  }, []);

  if (loading) {
    return <h1 className="title">Loading...</h1>;
  }

  if (error) {
    return <h1 className="title">Error...</h1>;
  }

  return (
    <div>
      <div className="posts">
        {postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
