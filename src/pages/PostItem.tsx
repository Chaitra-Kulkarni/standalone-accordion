import React from "react";
import { PostItemProps } from "../types";

const PostItem: React.FC<PostItemProps> = ({ title, body, tags }) => {
  return (
    <div className="h-[200px] w-[280px] flex flex-col justify-start gap-5 p-4 border-2 border-cyan-900 rounded-3xl">
      <div className="flex-1 font-medium underline underline-offset-4">{title}</div>
      <div className="flex-1 text-ellipsis whitespace-nowrap overflow-hidden">
        {body}
      </div>
      <div className="flex">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="border border-yellow-200 rounded-xl px-2 mr-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostItem;
