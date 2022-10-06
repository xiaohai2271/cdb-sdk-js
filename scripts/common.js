"use strict";
let fs = require("fs");
let path = require("path");
let shell = require("shelljs");


let constantMapping = {
    version: require('../package.json').version,
    host: 'https://cdb.menghuan.life',
    host_debug: 'http://127.0.0.1:8910/api'
};

function generateConstant(debug) {
    if (debug === void 0) { debug = false; }
    console.log('|=> 生成项目常量文件');
    debug && console.log('|=> +++++  DEBUG  +++++');
    let templateData = fs.readFileSync(path.resolve("./scripts/constant.ts.template")).toString();
    Object.keys(constantMapping).forEach(function (key) {
        let k = debug ? "".concat(key, "_debug") : key;
        templateData = templateData.replace("{".concat(key, "}"), constantMapping[k]);
    });
    fs.writeFileSync(path.resolve('src/data/constant.ts'), templateData);
}

function printLine(title) {
    let len = 80;
    if (title) {
        let halfLen = (len - title.length - 4) / 2;
        console.log("".concat('-'.repeat(halfLen), ": ").concat(title, " :").concat('-'.repeat(halfLen)));
        return;
    }
    console.log('-'.repeat(len));
}
function clearDist() {
    if (fs.existsSync(path.resolve('dist'))) {
        console.log('|=> 清理dist目录文件');
        shell.rm('-R', path.resolve('dist'));
    }
}

function tscBuild() {
    console.log('|=> tsc编译代码');
    shell.exec('tsc');
}

function publish(path) {
    if (path === void 0) { path = 'dist'; }
    console.log('|=> 发布');
    shell.cd(path).exec('npm publish');
}

function copyPackageJson(filePath) {
    console.log('|=> 处理资源');
    let packageInfo = require(filePath);
    let distPackageInfo = Object.assign({}, packageInfo, { scripts: {}, private: false, devDependencies: {} });
    fs.writeFileSync(path.resolve('dist/package.json'), JSON.stringify(distPackageInfo, null, 2));
}

exports.generateConstant = generateConstant;
exports.printLine = printLine;
exports.clearDist = clearDist;
exports.tscBuild = tscBuild;
exports.publish = publish;
exports.copyPackageJson = copyPackageJson;
