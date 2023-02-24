import express from "express";
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//Base get to URL
router.get("/", (req, res) => {
  res.send("API Working");
});

export default router;
