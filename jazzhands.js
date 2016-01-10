/**
 * Created by jbrayton on 1/10/16.
 */

var config = require("./config"),
    fs = require("fs"),
    log = require("debug")("jazzhands"),
    mkdirp = require("mkdirp");

function jazzercise(path) {
    console.log("Jazzercising...");
    var fileStream = fs.createWriteStream(path);
    for (var index = 1; index <= 100; index++) {
        var data = index;

        if (index % 3 === 0)
            data = "Jazz";
        if (index % 5 === 0)
            data = "Hands";
        if (index % 15 === 0)
            data = "JazzHands";

        console.log(data);
        fileStream.write(data + '\n');
    }
    fileStream.end();
}

directory = config.buildDirectory + config.outputDirectory;
file = directory + config.outputFile;
console.log("Output directory: " + directory);
console.log("Output file: " + file);

mkdirp(directory, function(err) {
    if (err)
        console.error(err);
    else
        jazzercise(file);
});
