import express from "express";
import {default as db} from "../db/conn.mjs"
import { ObjectId } from "mongodb";

const router = express.Router();

// get list of all sessions
router.get("/", async (req, res) => {
    let collection = await db.collection("sessions")
    let results = await collection.find(()).toArray();
    res.send(results).status(200)
})

// retrieve a single session
router.get("/:id", async (req, res) => {
    let collection = await db.collection("sessions")
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if (!result) res.send("Not found :(").status(404)
    else res.send(result).status(200);
})

// create a new session
router.post("/", async (req, res) => {
    let newDocument = {
        host: req.body.host,
        guest: req.body.guest, 
    }

    let collection = await db.collection("sessions")
    let result = await collection.insertOne(newDocument)

    res.send(result).status(204);
})

// update session by id (STUB)
router.post("/:id", async (req, res) => {
    res.status(200);
})

router.delete("/:id", async (req, res) => {
    res.status(200);
})

export default router