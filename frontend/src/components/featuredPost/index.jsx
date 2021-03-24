import React from "react"
import {FeaturedPostWrapper, ImageWrapper, Headline, Snippet, Date, PostDetails } from "./styles"

const FeaturedPost = ({ post }) => {
  return (
      
    <FeaturedPostWrapper>
      <PostDetails>
        <Headline>{post.headline}</Headline>
        <Snippet>{post.snippet}</Snippet>
        <Date>{post.date}</Date>
      </PostDetails>
      <ImageWrapper>
        <img src={post.image}></img>
      </ImageWrapper>
    </FeaturedPostWrapper>
  );
};
export default FeaturedPost;