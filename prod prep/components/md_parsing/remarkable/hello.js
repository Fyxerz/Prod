// THIS IS A QUICK HELLO WORLD THAT GETS THE MARKDOWN EXPLANATION FILE READS IT AND CONSOLES AN HTML OUTPUT.

var remarkable = require('./bower_components/remarkable/dist/remarkable.min.js');
var fs = require('fs');

var md = new remarkable();

// Asynchronous read
fs.readFile('../md_parsing.md', function(err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("Asynchronous read: " + md.render(data.toString()));
});
