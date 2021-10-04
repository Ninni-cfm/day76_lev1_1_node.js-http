const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {

    console.log(req.url);

    let filePath = `./public${req.url}`;
    const fileExtension = path.extname(filePath);
    let mimeType = 'text/html';

    if (fileExtension === '.ico')
        mimeType = 'icon/x-icon';

    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': mimeType }).end(data);
    })
});
server.listen(3000, () => { console.log("Webserver is listening to 127.0.0.1:3000") });
