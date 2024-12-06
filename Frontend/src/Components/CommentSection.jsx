import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaReply } from "react-icons/fa";

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
          dislikes: 0,
        },
      ],
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  // Add a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([
        ...comments,
        {
          id: Date.now(),
          username: "You",
          profilePic: "https://via.placeholder.com/40",
          timestamp: "Just now",
          text: newComment,
          likes: 0,
          dislikes: 0,
          showReplies: false,
          replies: [],
        },
      ]);
      setNewComment("");
    }
  };

  // Handle reply addition
  const handleReply = (commentId) => {
    if (replyText.trim() !== "") {
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  {
                    id: Date.now(),
                    username: "You",
                    profilePic: "https://via.placeholder.com/40",
                    text: replyText,
                    timestamp: "Just now",
                    likes: 0,
                    dislikes: 0,
                  },
                ],
              }
            : comment
        )
      );
      setReplyText("");
      setReplyingTo(null);
    }
  };

  // Toggle showing replies
  const toggleReplies = (commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, showReplies: !comment.showReplies }
          : comment
      )
    );
  };

  // Increment like or dislike
  const handleLikeDislike = (commentId, type, isReply = false, replyId = null) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          if (isReply) {
            return {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === replyId
                  ? { ...reply, [type]: reply[type] + 1 }
                  : reply
              ),
            };
          } else {
            return { ...comment, [type]: comment[type] + 1 };
          }
        }
        return comment;
      })
    );
  };

  return (
    <div className="p-4 mx-auto bg-white-900 text-black w-[60%] ">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>

      {/* Main Comment Input */}
      <div className="mb-6">
        <textarea
          className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2 text-sm text-white"
          rows="3"
          placeholder="Add a public comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="mt-2 flex justify-end space-x-2">
          <button
            className="px-4 py-1 bg-gray-700 text-sm rounded-md text-gray-400"
            onClick={() => setNewComment("")}
          >
            Cancel
          </button>
          <button
            className="px-4 py-1 bg-blue-500 text-white text-sm rounded-md"
            onClick={handleAddComment}
          >
            Comment
          </button>
        </div>
      </div>

      {/* Display Comments */}
      {comments.map((comment) => (
        <div key={comment.id} className="flex flex-col mb-6">
          <div className="flex items-start">
            {/* Profile Image */}
            <img
              src={comment.profilePic}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="flex-1">
              {/* Username and Timestamp */}
              <div className="flex items-center text-sm mb-1">
                <span className="font-semibold">{comment.username}</span>
                <span className="text-gray-500 ml-2">{comment.timestamp}</span>
              </div>

              {/* Comment Text */}
              <p className="mb-2">{comment.text}</p>

              {/* Actions */}
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <button
                  className="flex items-center space-x-1 hover:text-blue-500"
                  onClick={() => handleLikeDislike(comment.id, "likes")}
                >
                  <FaThumbsUp />
                  <span>{comment.likes}</span>
                </button>
                <button
                  className="flex items-center space-x-1 hover:text-red-500"
                  onClick={() => handleLikeDislike(comment.id, "dislikes")}
                >
                  <FaThumbsDown />
                  <span>{comment.dislikes}</span>
                </button>
                <button
                  className="flex items-center space-x-1 hover:underline"
                  onClick={() => setReplyingTo(comment.id)}
                >
                  <FaReply />
                  <span>Reply</span>
                </button>
              </div>
            </div>
          </div>

          {/* Replies */}
          {comment.replies.length > 0 && (
            <div className="ml-10 mt-4">
              <button
                onClick={() => toggleReplies(comment.id)}
                className="text-blue-500 font-semibold mb-2"
              >
                {comment.showReplies ? "Hide replies" : `${comment.replies.length} replies`}
              </button>
              {comment.showReplies &&
                comment.replies.map((reply) => (
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
                            handleLikeDislike(comment.id, "likes", true, reply.id)
                          }
                        >
                          <FaThumbsUp />
                          <span>{reply.likes}</span>
                        </button>
                        <button
                          className="flex items-center space-x-1 hover:text-red-500"
                          onClick={() =>
                            handleLikeDislike(comment.id, "dislikes", true, reply.id)
                          }
                        >
                          <FaThumbsDown />
                          <span>{reply.dislikes}</span>
                        </button>
                        <button
                          className="flex items-center space-x-1 hover:underline"
                          onClick={() => setReplyingTo(reply.id)}
                        >
                          <FaReply />
                          <span>Reply</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Reply Input */}
          {replyingTo === comment.id && (
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
                  onClick={() => setReplyingTo(null)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-1 bg-blue-500 text-white text-sm rounded-md"
                  onClick={() => handleReply(comment.id)}
                >
                  Reply
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
