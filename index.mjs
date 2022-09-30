import lib_logger from "./lib/logger.mjs"

function info(msg) {
    try {
		lib_logger.info(msg, 'info')
    }
    catch (e) {
        console.log(e);
    }
}

function warn(msg) {
    try {
		lib_logger.warn(msg)
    }
    catch (e) {
        console.log(e);
    }
}

function error(msg) {
    try {
		lib_logger.error(msg)
    }
    catch (e) {
        console.log(e);
    }
}

export default {info, warn, error}