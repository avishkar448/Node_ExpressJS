import express from "express";
import userModule from "./module.js";
const route = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { registerValidation, loginValidation } from "./validation.js";

route.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(404).send(error);

  const emailExist = await userModule.findOne({
    email: req.body.email,
  });

  if (emailExist) return res.status(404).send("Email already exist!");

  const salt = await bcrypt.genSalt(10);
  const hashpass = await bcrypt.hash(req.body.password, salt);

  const newUser = new userModule({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: hashpass,
  });

  try {
    const saveData = await newUser.save();
    res.send(saveData);
  } catch (error) {
    console.log(error);
  }
});

route.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(404).send(error);

  const userExist = await userModule.findOne({
    email: req.body.email,
  });

  if (!userExist) return res.status(404).send("Invalid Email");

  const passExist = await bcrypt.compare(req.body.password, userExist.password);
  if (!passExist) return res.status(404).send("Invalid Password");

  return res.send("login succesfully!!");
});

export default route;
