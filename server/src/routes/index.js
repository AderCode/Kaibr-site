import { Router } from 'express';
import testRouter from './test';
// import stripeDonationsRouter from './stripeDonations';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

// router.use('/auth', authRouter);
// router.use('/donate', stripeDonationsRouter);

router.use('/test', testRouter);

export default router;