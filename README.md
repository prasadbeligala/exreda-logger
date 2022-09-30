exreda-logger is a simple logger that is suitable for all types of projects.
This is an ES6 type module (not CommonJS), which should use with 'import' statements.

## Installation
```
npm install exreda-logger
```
## Usage
- Import the package
```
import log from 'exreda-logger'
```

-Call log.info(), log.warn() or log.error() functions wherever you need to log messages.

### Examples: 
- To log an info;
```
log.info("information!")
```

- To log a warning;
```
log.warn("Warning message")
```

- To log an error;
```
log.error("Error message")
```

### Log file location

The module will save all log files in the "logs" directory in the root.
If there's no directory called "logs" in the root, the module will create a new directory.
For example, the path of the error log will be; /logs/error.log.

> Warning! If you already have a directory called "logs" in the root, it will be overridden.