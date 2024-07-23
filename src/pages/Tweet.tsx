import { useState } from "react";
import TweetList from "./TweetList";

const Tweet = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleEnteredValue = (e) => {
    setEnteredValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTweets([...tweets, enteredValue]);
    setEnteredValue("");
  };

  return (
    <div className="w-full flex flex-col justify-center my-5 text-black">
      <div className="flex justify-center">
        <form
          className="flex justify-evenly items-center h-auto w-1/2"
          onSubmit={handleSubmit}
        >
          <textarea
            rows={7}
            cols={55}
            placeholder="Type your message..."
            value={enteredValue}
            className="border rounded-lg p-2"
            onChange={(e) => handleEnteredValue(e)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-cyan-800 border text-white border-black rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
      {tweets.map((tweet) => (
        <TweetList tweet={tweet} />
      ))}
    </div>
  );
};

export default Tweet;
