fs = require('fs');


data = fs.readdirsync('c:/');
console.log('data:', data);
console.log("this come after");