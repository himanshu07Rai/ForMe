import express from 'express';
import restaurantsRouter from './routes/restaurants';
import cuisinesRouter from './routes/cuisines';
import { errorHandler } from './middlewares/errorhandler';
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/restaurants', restaurantsRouter);
app.use('/cuisines', cuisinesRouter);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }).on('error', (err) => {
        console.error(err);
        throw new Error(err.message)
    })