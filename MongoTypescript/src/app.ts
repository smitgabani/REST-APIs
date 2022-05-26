// > npm imports
import express from "express";
import config from "config";
import logger from "./utils/logger";

// > custom imports
import {connect} from "./utils/connect";

// > config valuse
const port = config.get<number>('port');
const host = config.get('host') as string;

// > creating express instance
const app = express();

// > middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// > inization callback function
async function onServerStart() {
    await connect();
    logger.info('Express server running at http://' + host + ':' + port + '/');
}
app.listen(port, onServerStart);