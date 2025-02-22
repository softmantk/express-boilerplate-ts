import app from "./app";
import {logger} from "./shared/utils";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    logger.info(`Server started on port ${port}`);
})

process.on('unhandledRejection', error => logger.error({
    type: 'INFO',
    message: {
        type: 'Unhandled Rejection',
        error: error,
    },
}));

