import { Router } from 'express';

let router = Router();

router.get('/', (req, res) => {
    res.status(200).send('Test Response!');
});

export default router;