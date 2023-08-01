const httpServer = require('http-server');

const port = 3041;

// Start the HTTP server
const server = httpServer.createServer({
  root: './',
  cache: -1,
});

server.listen(3041, () => {
  console.log('Server listening on http://localhost:3041');
});

// Start nodemon to watch for changes
// nodemon({
//   script: 'index.js',
//   ext: 'html',
//   ignore: [],
// }).on('restart', () => {
//   console.log('Server restarted');
// });
