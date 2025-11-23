import express from 'express'
import cors from "cors";
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import connectDb from "./config/db.js";
import routes from "./routes/index.js";
import errorHandler from './middleware/errorHandler.js';
import swaggerDocument from '../swagger-output.json' with {type: 'json'};

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', routes());
app.use(errorHandler);

const mongoURL =
    process.env.NODE_ENV === "development"
        ? process.env.MONGO_URL_DEV
        : process.env.MONGO_URL_PROD;

app.listen(PORT, async () => {
    try {
        await connectDb(mongoURL);
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error('Error starting server:', error);
    }
});
