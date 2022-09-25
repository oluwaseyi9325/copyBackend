const express=require("express");
const { addSummaryController } = require("../../component/user/addSummaryController");
const { jwtController } = require("../../component/user/authToken");
const { editLoginController } = require("../../component/user/editLoginController");
const { editNamesController } = require("../../component/user/editNameController");
const { forgetPassword } = require("../../component/user/forgetPassword");
const { userLoginController } = require("../../component/user/login");
const { portfolioLinkController } = require("../../component/user/portfolioLinks");
const { signupController } = require("../../component/user/signup");
const authUser=express.Router();


authUser.post("/signin",userLoginController);

authUser.get('/token',jwtController)

authUser.post('/signup',signupController)

authUser.post("/editNames",editNamesController)

authUser.post("/addSummary",addSummaryController)

authUser.post("/portfolioLink",portfolioLinkController)

authUser.post("/forgetPassword",forgetPassword)

authUser.post("/editLoginDetails",editLoginController)


module.exports={authUser};

