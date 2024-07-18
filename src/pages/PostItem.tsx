import React from "react";
import { PostItemProps } from "../types";

const PostItem: React.FC<PostItemProps> = ({ title, body, tags }) => {
  return (
    <div className="h-[200px] w-[280px] flex flex-col gap-5 p-4 border-2 border-cyan-900 rounded-3xl">
      <span className="font-medium underline underline-offset-4">{title}</span>
      <span className="text-ellipsis whitespace-nowrap overflow-hidden">
        {body}
      </span>
      <div className="flex align-bottom items-baseline">
        {tags.map((tag) => (
          <span className="border border-cyan-100 rounded-xl p-1 mx-1 text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostItem;
