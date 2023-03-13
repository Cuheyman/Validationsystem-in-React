const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
  // Handle form submissions
  if (req.method === 'POST' && req.url === '/submit-form') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const data = JSON.parse(body);
      const filePath = path.join(__dirname, 'form-data.json');
      fs.writeFile(filePath, JSON.stringify(data), (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end('Error saving form data');
        } else {
          res.statusCode = 200;
          res.end('Form data saved successfully');
        }
      });
    });
  } else {
    // Handle other requests
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});