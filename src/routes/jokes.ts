import { Router } from "express";
import jokesCollection from "../data/jokes.json";


export const jokes = Router();

jokes.get("/", async (req, res) => {
    return res.json(jokesCollection);
});
