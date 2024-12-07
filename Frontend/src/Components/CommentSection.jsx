import React, { useState } from "react";
import { FaThumbsUp, FaReply} from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CommentTemplate = ({
  id,
  username,
  profilePic,
  timestamp,
  text,
  likes,
  replyBoxOpen,
  onReply,
}) => {
  return (
    <div className="p-4 mx-auto bg-white text-gray-900 mb-4 w-full">
       <div className="mb-6 w-full">
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a comment..."
        />
        <button
          className="mt-2 float-end px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 "

        >
          Post
        </button>
      </div>
      {/* Parent Comment */}
      <div className="flex items-start mt-16">
        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="flex-1">
          {/* Username and Timestamp */}
          <div className="flex items-center text-sm mb-1">
            <span className="font-semibold">{username}</span>
            <span className="text-gray-500 ml-2">{timestamp}</span>
          </div>

          {/* Comment Text */}
          <p className="mb-2">{text}</p>

          {/* Actions */}
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <button className="flex items-center space-x-1 hover:text-blue-500">
              <FaThumbsUp />
              <span>{likes}</span>
            </button>
            <button
              className="flex items-center space-x-1 hover:underline"
              onClick={() => onReply(id)}
            >
              <FaReply />
              <span>Reply</span>
            </button>
            <button className="flex items-center space-x-1 text-lg hover:text-red-600">
               <MdDelete />
            </button>
          </div>
          <div className="text-blue-700 hover:underline">Replies</div>
        </div>
      </div>

      {/* Reply Box */}
      {replyBoxOpen && (
        <div className="mt-4 ml-14">
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-200 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={`Replying to @${username}...`}
          />
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Reply
          </button>
        </div>
      )}
    </div>
  );
};

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      username: "MonsterlessonsAcademy",
      profilePic: "https://via.placeholder.com/40",
      timestamp: "1 second ago",
      text: "This is a parent comment.",
      likes: 8,
      dislikes: 1,
      showReplies: false,
      replies: [
        {
          id: 2,
          username: "priyaacharjee6211",
          profilePic: "https://via.placeholder.com/40",
          text: "@MonsterlessonsAcademy kjkkjj",
          timestamp: "1 second ago",
          likes: 0,
        },
      ],
    },
  ]);

  const [activeReplyId, setActiveReplyId] = useState(null);

  const handleReplyClick = (id) => {
    setActiveReplyId(activeReplyId === id ? null : id); // Toggle reply box
  };

  return (
    <div className="bg-slate-300 mt-6 text-gray-700 p-4 w-[60%] mx-auto">
      {comments.map((comment) => (
        <CommentTemplate
          key={comment.id}
          id={comment.id}
          username={comment.username}
          profilePic={comment.profilePic}
          timestamp={comment.timestamp}
          text={comment.text}
          likes={comment.likes}
          replyBoxOpen={activeReplyId === comment.id}
          onReply={handleReplyClick}
        />
      ))}
    </div>
  );
};

export default CommentSection;




