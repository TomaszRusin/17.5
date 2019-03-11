var os = require('os');
var colors = require('colors');

var formatFunction = require('./formatTime');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log(colors.green('System:', type));
    console.log(colors.yellow('Release:', release));
    console.log(colors.gray('CPU model:', cpu));
    console.log(colors.magenta('Uptime: ~', formatFunction.time(uptime)));
    console.log(colors.cyan('User name:', userInfo.username));
    console.log(colors.red('Home dir:', userInfo.homedir));
}

exports.print = getOSinfo;