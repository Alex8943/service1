import express from 'express';
import { testDBConnection } from './db_service/db_connection';
import logger from './other_services/winstonLogger';
const app = express();

testDBConnection();

process.on('SIGINT', () => {
    logger.end();
    console.log('See ya later silly');
    process.exit(0);
  });

app.listen(3001, () => {
    console.log("Server1 is running on port 3001");
})

