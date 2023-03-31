const User = require('./user'); 
const Posts = require('./post')

Posts.belongsTo(User, {
    foreignKey: 'user_id'
}); 

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE', 
});


module.exports = { User, Posts}