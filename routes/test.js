import express from "express";

const router = express.Router();

router.get("/", (req,res,next)=>{
      res.send("hello user, you are logged in")
    })

export default router
