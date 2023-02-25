import express from "express";
const router = express.Router();
import {loginUser} from '../controllers/admin.controller.js'
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//Base get to URL
router.get("/", (req, res) => {
  res.send("API Working");
});

router.post("/loginAdmin", loginUser)
// router.post("/getAdmin", loginUser)

export default router;