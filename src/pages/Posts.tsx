import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { PostItemProps } from "../types";
import { Button, Spin } from "antd";

const Posts = () => {
  const [postsData, setPostsData] = useState<PostItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfPosts, setNumberOfPosts] = useState(8);

  useEffect(() => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        postsDetails();
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const postsDetails = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const parsedResponse = await response.json();
    setPostsData(parsedResponse.posts);
    setIsLoading(false);
  };

  const handleLoadMore = () => {
    setNumberOfPosts((prevPosts) => prevPosts + 8);
  };

  return isLoading ? (
    <div className="h-screen flex justify-center items-center">
      <Spin size="large" />
    </div>
  ) : (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-4 gap-2 m-2">
        {postsData.slice(0, numberOfPosts).map((postItem, index) => (
          <div className="m-2" key={index}>
            <PostItem
              title={postItem.title}
              body={postItem.body}
              tags={postItem.tags}
            />
          </div>
        ))}
      </div>
      <div className="my-0 mx-auto">
        {numberOfPosts < postsData.length && (
          <Button onClick={handleLoadMore}>Load more</Button>
        )}
      </div>
    </div>
  );
};

export default Posts;
