import express from 'express';
import { testDBConnection } from './db_service/db_connection';
const app = express();

testDBConnection();

app.listen(3001, () => {
    console.log("Server1 is running on port 3001");
})

