import express from 'express';

import githubService from "./github.service";
import {errorCodes} from "../../shared/utils/errors.utils";

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const response = await githubService.getGithubRepositoryList();
        res.json(response);
    } catch (e) {
        next(e)
    }
})

export default router;