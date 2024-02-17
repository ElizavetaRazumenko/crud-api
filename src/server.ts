import http, { request } from 'http';
import cluster from 'cluster';
import os from 'os';
import * as dotenv from 'dotenv';
import { requestHandler } from './tools/requestHandler';

export const getCreateServer = () => http.createServer((req, res) => {
  requestHandler(req, res);
});

dotenv.config();
const PORT = Number(process.env.NODE_PORT) || 4000;
const numCPUs = os.cpus().length;

if (process.env.MULTI) {
  if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    const workerArray = Object.values(cluster?.workers || {});
  
    let index = 0;
  
    http.createServer((req, res) => {
      const newPort = PORT + (index % numCPUs) + 1 ;
      const url = `http://localhost:${newPort}${req.url}`;

      const worker = workerArray[index];
      
      console.log(`Transferred to worker ${worker?.process.pid}: ${url}`);
  
      const proxyRequest = request(url, { method: req.method, headers: req.headers }, (proxyRes) => {
        res.writeHead(proxyRes.statusCode || 505, proxyRes.headers);
        proxyRes.pipe(res, { end: true });
      });
      req.pipe(proxyRequest, { end: true });
      index = (index + 1) % numCPUs;
    }).listen(PORT);

  } else {
    const newPort = PORT + cluster.worker!.id;
    const server = getCreateServer();

    server.listen(newPort, () => {
      console.log(`Worker ${cluster.worker!.id} is listening on port ${newPort}`);
    });
  }
} else {
  http.createServer(requestHandler).listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });  
}


