import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { getDogs, testApi } from './src/dogs.js';

const app = express();      // sets up express app
app.use(cors());            // tells it to allow cross=origin resource handling
app.use(express.json());    // allows posts with JSON bodies



app.get("/dogs", getDogs);

app.get("/test", testApi);

//instead of app.listen(port)

//create cloud function

export const api = functions.https.onRequest(app)

//point it to app



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
