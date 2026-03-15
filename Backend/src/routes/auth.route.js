import { Router } from "express";
import { register, verifyEmail, login, getMe } from "../controllers/auth.controller.js";
import { registerValidator, loginValidator } from "../validators/auth.validator.js";
import { authUser } from "../middleware/auth.middleware.js";
import { testAi } from "../services/ai.service.js";

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { username, email, password }
 */
authRouter.post("/register", registerValidator, register);


/**
 * @route POST /api/auth/login
 * @desc Login user and return JWT token
 * @access Public
 * @body { email, password }
 */
authRouter.post("/login", loginValidator, login)



/**
 * @route GET /api/auth/get-me
 * @desc Get current logged in user's details
 * @access Private
 */
authRouter.get('/get-me', authUser, getMe)

/**
 * @route GET /api/auth/verify-email
 * @desc Verify user's email address
 * @access Public
 * @query { token }
 */
authRouter.get('/verify-email', verifyEmail)

/**
 * @route GET /api/auth/testAi
 * @desc This is temporary api for testing the ai implementation
 * @access Public
 */
authRouter.get('/test-ai', async (req, res) => {
    const response = await testAi(req.body);
    res.status(200).json({
        response
    });
})

export default authRouter;