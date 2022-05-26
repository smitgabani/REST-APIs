import mongoose from 'mongoose';
import config from 'config';
import logger from "./logger";

// @desc: return a promice
export function connect() {
    const dbUri = config.get('dbUri') as string;
    return mongoose.connect(dbUri)
        .then(() => {logger.info("Connected to MongoDB")})
        .catch(() => {logger.error("Connection to MongoDb failed!"); process.exit(1)})
}