import React, { useState } from "react";
import "./Post.css";

const Post = ({ post }) => {
  const { id, name, image } = post;

  return (
    <div
      className="post"
      onClick={() => {
        console.log(id + " pressed");
      }}
    >
      <img className="img-resp" src={image} alt={name} />
      <h4 className="text">{name}</h4>
    </div>
  );
};

export default Post;
