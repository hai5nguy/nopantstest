// var exec        = require('child_process').exec;



// exec('mongod --dbpath ./localdb/db/', function (execErr, stdout, stderr) {
//     console.log('strout', stdout);
//     console.log('stderr ', stderr);
//     console.log('execErr ', execErr);
// });




var exec = require("child_process").exec;
var child = exec('mongod --dbpath ./localdb/db/');
//Return data from command line
child.stdout.on("data", function(chunk) {
    console.log('chunk: ', chunk);
});