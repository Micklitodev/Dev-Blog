const { Comment } = require("../models");

const commentData = [
  {
    comment_body: "This is a test comment for the test post.",
    post_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
