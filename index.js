const fs=require("fs");

fs.writeFile("msg.txt","hello from node!!", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  fs.readFile("msg.txt","utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });