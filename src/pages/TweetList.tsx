import React from "react";
import { TweetValueProps } from "../types";

const TweetList: React.FC<TweetValueProps> = ({ tweet }) => {
  return (
    <div className="flex justify-center text-white">
      <div className="m-2 w-1/2 border-b">
        <span><input type="checkbox" className="mr-2" />{tweet}</span>
      </div>
    </div>
  );
};

export default TweetList;
