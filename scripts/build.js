"use strict";

const {clearDist, generateConstant, printLine, tscBuild} = require("./common");

printLine('HMC-SDK');
clearDist();
generateConstant(!!process.env.debug);
tscBuild();
printLine();
