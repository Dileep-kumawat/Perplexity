import express from 'express';
import { registerValidator } from '../validators/auth.validator.js';
import { register } from '../controllers/auth.controller.js';

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { username, email, password }
 */
authRouter.post("/register", registerValidator, register);

export default authRouter;