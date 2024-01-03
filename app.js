const { log } = require("console");
const os = require("os");
const { cursorTo } = require("readline");

//info about current user

// const user = os.userInfo();
// console.log(user);

//method returrns the system uptime in seconds
// console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  cpu: os.cpus(),
  release: os.release(),
  freemem: os.freemem(),
};

// console.log(currentOS);

const path = require("node:path");

console.log(path.sep);
