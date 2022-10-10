"use strict";
const path = require("path");
let fs = require("fs");

const {clearDist, copyPackageJson, generateConstant, printLine, tscBuild, publish} = require("./common");

function patchTscCommonjsBuild() {
  const data = "module.exports=Hmc"
  fs.writeFileSync(path.resolve("./dist/index.js"), Buffer.from(data), {flag: 'a'})
}


printLine('HMC-SDK');
clearDist();
generateConstant();
tscBuild();
patchTscCommonjsBuild();
copyPackageJson(path.resolve('package.json'));
// publish();
printLine();
