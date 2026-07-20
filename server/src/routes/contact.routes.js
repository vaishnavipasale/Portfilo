import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { submitContactForm } from '../controllers/contact.controller.js';

const router = Router();

// Prevent basic spam/abuse of the contact endpoint.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many messages sent — please try again later.' }
});

router.post('/', contactLimiter, async (req, res, next) => {
  try {
    await submitContactForm(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
