import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaReply } from "react-icons/fa";

const SingleComment = () => {
  const [likes, setLikes] = useState(8);
  const [dislikes, setDislikes] = useState(1);
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState([
    {
      id: 1,
      username: "priyaacharjee6211",
      profilePic: "https://via.placeholder.com/40", // Replace with actual profile pic URL
      text: "@MonsterlessonsAcademy kjkkjj",
      timestamp: "1 second ago",
      likes: 0,
      dislikes: 0,
    },
  ]);
  const [replyText, setReplyText] = useState("");
  const [replying, setReplying] = useState(false);

  // Add a reply
  const handleAddReply = () => {
    if (replyText.trim() !== "") {
      setReplies([
        ...replies,
        {
          id: Date.now(),
          username: "You",
          profilePic: "https://via.placeholder.com/40",
          text: replyText,
          timestamp: "Just now",
          likes: 0,
          dislikes: 0,
        },
      ]);
      setReplyText("");
      setReplying(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-gray-900 text-white">
      {/* Parent Comment */}
      <div className="flex items-start">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="flex-1">
          {/* Username and Timestamp */}
          <div className="flex items-center text-sm mb-1">
            <span className="font-semibold">MonsterlessonsAcademy</span>
            <span className="text-gray-500 ml-2">1 second ago</span>
          </div>

          {/* Comment Text */}
          <p className="mb-2">This is a parent comment.</p>

          {/* Actions */}
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <button
              className="flex items-center space-x-1 hover:text-blue-500"
              onClick={() => setLikes(likes + 1)}
            >
              <FaThumbsUp />
              <span>{likes}</span>
            </button>
            <button
              className="flex items-center space-x-1 hover:text-red-500"
              onClick={() => setDislikes(dislikes + 1)}
            >
              <FaThumbsDown />
              <span>{dislikes}</span>
            </button>
            <button
              className="flex items-center space-x-1 hover:underline"
              onClick={() => setReplying(!replying)}
            >
              <FaReply />
              <span>Reply</span>
            </button>
          </div>
        </div>
      </div>

      {/* Replies Section */}
      {replies.length > 0 && (
        <div className="ml-10 mt-4">
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="text-blue-500 font-semibold mb-2"
          >
            {showReplies ? "Hide replies" : `${replies.length} replies`}
          </button>
          {showReplies &&
            replies.map((reply) => (
              <div key={reply.id} className="flex items-start mb-4">
                <img
                  src={reply.profilePic}
                  alt="Profile"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <div className="flex items-center text-sm mb-1">
                    <span className="font-semibold">{reply.username}</span>
                    <span className="text-gray-500 ml-2">{reply.timestamp}</span>
                  </div>
                  <p className="text-sm">{reply.text}</p>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <button
                      className="flex items-center space-x-1 hover:text-blue-500"
                      onClick={() =>
                        setReplies(
                          replies.map((r) =>
                            r.id === reply.id ? { ...r, likes: r.likes + 1 } : r
                          )
                        )
                      }
                    >
                      <FaThumbsUp />
                      <span>{reply.likes}</span>
                    </button>
                    <button
                      className="flex items-center space-x-1 hover:text-red-500"
                      onClick={() =>
                        setReplies(
                          replies.map((r) =>
                            r.id === reply.id ? { ...r, dislikes: r.dislikes + 1 } : r
                          )
                        )
                      }
                    >
                      <FaThumbsDown />
                      <span>{reply.dislikes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Reply Input */}
      {replying && (
        <div className="mt-4 ml-10">
          <textarea
            className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2 text-sm text-white"
            rows="2"
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className="mt-2 flex justify-end space-x-2">
            <button
              className="px-4 py-1 bg-gray-700 text-sm rounded-md text-gray-400"
              onClick={() => setReplying(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-1 bg-blue-500 text-white text-sm rounded-md"
              onClick={handleAddReply}
            >
              Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleComment;