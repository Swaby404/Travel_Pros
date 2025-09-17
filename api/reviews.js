 import express from "express";
 const router = express.Router();

 export default router;

 import { createReviews, getReviews, getAllReviews } from "#db/queries/reviews.js";

 import requireUser from "#middleware/requireUser";
 router.use(requireUser);

 router.get("/", async (req, res) => {
   try {
     const reviews = await getAllReviews();
     res.send(reviews);
   } catch (err) {
     res.status(500).send("Server error.");
   }
 });

 router.post("/", async (req, res) => {
   try {
     const review = await createReviews({ user_id: req.user.id, ...req.body });
     res.status(201).send(review);
   } catch (err) {
     res.status(500).send("Server error.");
   }
 });

 router.get("/:id", async (req, res) => {
   try {
     const review = await getReviews({ id: req.params.id });
     if (!review) return res.status(404).send("Review not found.");
     res.send(review);
   } catch (err) {
     res.status(500).send("Server error.");
   }
 });