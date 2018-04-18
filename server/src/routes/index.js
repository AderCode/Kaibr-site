import { Router } from 'express';
import testRouter from './test';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

// Routes
// import stripeDonationsRouter from './stripeDonations';
import contactRouter from './contact';


let router = Router();

router.use('/contact', contactRouter)

// router.use('/auth', authRouter);
// router.use('/donate', stripeDonationsRouter);

router.use('/test', testRouter);

export default router;