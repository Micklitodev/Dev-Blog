const User = require("./user");
const Posts = require("./post");
const Comment = require("./comment");

Posts.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Posts, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Posts, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Posts.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Posts, Comment };
