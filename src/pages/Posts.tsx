import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { PostItemProps } from "../types";

const Posts = () => {
  const [postsData, setPostsData] = useState<PostItemProps[]>([]);

  useEffect(() => {
    try {
      fetch("https://dummyjson.com/posts")
        .then((response) => response.json())
        .then((result) => setPostsData(result.posts));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 grid grid-cols-4 gap-2 m-2">
        {postsData.map((postItem, index) => (
          <div className="m-2" key={index}>
            <PostItem
              title={postItem.title}
              body={postItem.body}
              tags={postItem.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
