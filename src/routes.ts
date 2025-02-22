import express from 'express';
import githubController from "./modules/github/github.controller";

const router = express.Router();

router.use('/github', githubController);

export default router;