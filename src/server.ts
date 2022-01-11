import express from "express";
import cors from "cors";
import { jokes } from "./routes/jokes";
import { loggerMiddleware } from "./middlewares/logger";

export const initServer = async () => {
    const app = express();
    
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    
    app.use(loggerMiddleware);
    
    app.use("/api/jokes", jokes);
    
    const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 1337;
    
    return app.listen(PORT, () => {
        console.log("\x1b[35m%s\x1b[0m", `[server] Server running on port ${PORT}`);
        console.log("\x1b[36m%s\x1b[0m", `[server] ${new Date()}`);
    });
};