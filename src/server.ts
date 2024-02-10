import http, { Server } from 'http';
import * as dotenv from 'dotenv';

dotenv.config();
const port = process.env.NODE_PORT;

export const server: Server = http.createServer();

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});