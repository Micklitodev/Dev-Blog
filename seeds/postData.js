const { Posts } = require("../models");

const postData = [
  {
    post_sub: "This is a new Tech sample post",
    post_descr: `This new description is to test the`,
    user_id: 1
  },
];

const seedPost = () => Posts.bulkCreate(postData);

module.exports = seedPost;
