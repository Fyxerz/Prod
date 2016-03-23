// THIS IS A QUICK HELLO WORLD THAT GETS THE MARKDOWN EXPLANATION FILE READS IT AND CONSOLES AN HTML OUTPUT.

var marked = require("marked");
var fs = require("fs");

// Asynchronous read
fs.readFile('../md_parsing.md', function(err, data) {
   if (err) {
       return console.error(err);
   }
   console.log('Marked says:' + marked(data.toString()));
});
