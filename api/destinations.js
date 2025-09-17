
import express from "express";
const router = express.Router();
export default router;


import { createDestinations, getDestinations  } from "#db/queries/destinations.js";
 

router
.route("/").get(async (req, res) => {
  try {
    const destinations = await getDestinations();
    res.send(destinations);
  } catch (err) {
    res.status(500).send("Server error.");
  }
});


router.route("/:id").get(async (req, res) => {
  try {
    const destination = await createDestinations(req.params.id);
    if (!destination) return res.status(404).send("Destination not found.");
    res.send(destination);
  } catch (err) {
    res.status(500).send("Server error.");
  }
});

 

 