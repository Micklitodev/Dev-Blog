const { Posts } = require("../models");

const postData = [
  {
    post_sub: "This is a new Tech sample post",
    post_descr: `This new description is to test the`,
    user_id: 1
  },
  {
    post_sub: "SamplePost posts samples! ",
    post_descr: `This just in today a sample post was posted`,
    user_id: 1
  },
  {
    post_sub: "This is just a post with the best VPN ",
    post_descr: `1 - nord, 2 - cyberghost, 3- express vpn`,
    user_id: 1
  },
];

const seedPost = () => Posts.bulkCreate(postData);

module.exports = seedPost;
