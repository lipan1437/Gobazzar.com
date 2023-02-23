const express = require("express");

const { UserModel } = require("../model/User.model");


const bcrypt = require("bcrypt");

//required the token


const jwt = require("jsonwebtoken");



const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {


  const { name, email,  password } = req.body;

  try {

    //bcrypt use for hashing the password
    bcrypt.hash(password, 5, async (err, hash) => {

      if (err) {
        res.send({ msg: "something went wrong" });

      } else {
        const data = new UserModel({ name, email, password:hash});


        await data.save();

        res.send(data);

        // console.log(hash)
      }
    });


  } catch (error) {

    res.send({ msg: "something went wrong", error: error.message });

  }
});

userRouter.post("/login", async (req, res) => {

  const { email ,password} = req.body;

  try {


    const user = await UserModel.find({ email });

    console.log(user);


    if (user.length > 0) {
      

      bcrypt.compare(password, user[0].password, (err, result) => {

        if (result) {

          //to create a token


          const token = jwt.sign({ userID: user[0]._id }, "masai");


          //and then passed the token

          res.send({ msg: "logging success", token: token });


        }else{


            res.send({ msg: "wrong credentials" });

        }
      });


    } else {
      res.send({ msg: "wrong credentials" });

    }
  } catch (error) {


        res.send( error.message);
  }

});



module.exports = { userRouter };