const UserModel = require("../models/User");
const Bcrypt = require("bcryptjs");
const JsonWebToken = require("jsonwebtoken");
const SECRET_JWT_CODE = "psmR3Hu0ihHKfqZymo1m";

exports.login = async (email) => {
  return await UserModel.findOne({
    email: email,
  });
};

exports.signUp = async (email, password) => {
  return await UserModel.create({
    email: email,
    password: Bcrypt.hashSync(password, 10),
  });
};

exports.fetchUserByToken = (req) => {
  return new Promise((resolve, reject) => {
    if (req.headers && req.headers.authorization) {
      let authorization = req.headers.authorization;
      console.log(authorization);
      let decoded;
      try {
        decoded = JsonWebToken.verify(authorization, SECRET_JWT_CODE);
      } catch (e) {
        console.log(e);
        reject("Token not valid");
        return;
      }
      console.log(decoded);
      let userId = decoded.id;
      UserModel.findOne({
        _id: userId,
      })
        .then((user) => {
          resolve(user);
        })
        .catch((error) => {
          reject("Token error");
        });
    } else {
      reject("No token found");
    }
  });
};

// example
// app.get(route, (req, res) => {
//     fetchUserByToken(req)
//         .then((user) => {
//             // token is valid
//         }).catch((err) => {
//             //token is not valid
//         })
// })
