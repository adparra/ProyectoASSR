import app from './app.js';
import connect from './db.js';

app.listen(3000);
console.log('Server on port', 3000);
connect();
