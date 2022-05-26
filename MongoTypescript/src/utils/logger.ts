import logger from "pino";
import dayjs from "dayjs";

const log = logger({
    prettyPrint: true,
    // transport: {
    //     target: 'pino-pretty',
    //     options: {colorize: true}
    // },
    base: {
        pid: false
    },
    timestamp: () => `,"Time: ""${dayjs().format('MM-DD | T:- hh:mm:ss')}"` // 01-25|T:-04:02:18
})

export default log;