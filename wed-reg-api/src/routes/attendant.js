import express from "express";

const router = express.Router();

router.get("/", () => {
  return { message: "Not Implemented" };
});

export default router;
