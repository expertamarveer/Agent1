const kill = require("kill-port");
kill(8181, "tcp");
console.log("killing process for stoping server");