import { RequestHandler } from "express";

export const loggerMiddleware: RequestHandler = async (req, res, next) => {
    console.log(`[${req.method}] ${new Date().toISOString()} "${req.originalUrl}"`);
    next();
};