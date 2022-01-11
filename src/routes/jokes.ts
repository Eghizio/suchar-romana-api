import { Router } from "express";
import jokesCollection from "../data/jokes.json";


export const jokes = Router();

jokes.get("/", async (req, res) => {
    return res.json(jokesCollection);
});

jokes.get("/random", async (req, res) => {
    const randomJoke = jokesCollection[Math.floor(Math.random() * jokesCollection.length)];
    
    return res.json(randomJoke);
});

jokes.get("/:id", async (req, res) => {
    const requestedJoke = jokesCollection.find(joke => joke.id.toString() === req.params.id);

    if(requestedJoke !== undefined){
        return res.json(requestedJoke);
    }

    return res.sendStatus(404);
});
