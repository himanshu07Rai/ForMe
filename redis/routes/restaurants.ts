import express from 'express';
import { validate } from '../middlewares/validate';
import { Restaurant, RestaurantSchema } from '../schemas/restaurants';
const router = express.Router();

router.post('/',validate(RestaurantSchema), (req, res) => {
    console.log("hehe")
    const data = req.body as Restaurant;


    res.send('Hello World');
});

export default router;