import expressAsyncHandler from "express-async-handler";
import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { json } from "sequelize";
import validateToken from "../middleware/validateTokenHandler.js";

// @desc    Register new user
// @route   POST /api/users/register
// @access  Public
export const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const userExists = await Users.findOne({ where: { email } });

  if (userExists) {
    res.status(400);
    throw new Error("User already registered");
  }

  // const hashedPassword = await bcrypt.hash(password, 10);
  // console.log("hashed password:", hashedPassword)

  const user = await Users.create({ name, email, password: password });

  console.log(`user created ${user}`);
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.res(400);
    throw new Error("user data is not valid");
  }
  res.json({ message: "Register the user" });
});

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
export const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("all field are required");
  }

  const user = await Users.findOne({ where: { email } });
  console.log("User found:", user);

  //compare password with hashed password
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          name: user.name,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Get logged-in user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = expressAsyncHandler(async (req, res) => {
  const { id, name, email } = req.user;
  res.status(200).json({ id, name, email });
});
