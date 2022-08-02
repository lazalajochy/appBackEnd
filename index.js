import express from 'express';
import cors from 'cors';
import db from './conn/conn.js';
import router from './routes/routes.js';
import './models/relationship.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use('/prestamo',router);

try {
    await db.authenticate();
    await db.sync(true)
    console.log("Connection has been established successfully.")
} catch (error) {
    console.log('Unable to connect to the database: ', error)
    
}


app.set('port', process.env.PORT || 5000);


app.listen(app.get('port'), () => {
    console.log("Server running on port", app.get('port'));
});