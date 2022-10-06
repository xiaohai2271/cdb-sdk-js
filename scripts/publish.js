"use strict";
const path = require("path");

const {clearDist, copyPackageJson, generateConstant, printLine, tscBuild, publish} = require("./common");

printLine('HMC-SDK');
clearDist();
generateConstant();
tscBuild();
copyPackageJson(path.resolve('package.json'));
publish();
printLine();
