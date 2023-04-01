const sequelize = require("../config/connection");

const { Model, DataTypes } = require("sequelize");

const bcrypt = require("bcrypt");

class User extends Model {
  verifyPass(pass) {
    return bcrypt.compareSync(pass, this.password);
  }
  returnUserName() {
    return this.username
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {  
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUser) {
        newUser.password = await bcrypt.hash(newUser.password, 7);
        return newUser;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);
 
module.exports = User;
