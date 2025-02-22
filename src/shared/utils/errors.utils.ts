interface ErrorDetail {
    status: number;
    code: string;
    message?: string;
}

export const errorCodes = {
    unauthorisedError: {
        status: 401,
        code: "UnauthorizedError",
        message: "Access denied",
    },
    badRequest: {
        status: 400,
        code: "Bad request",
    },
    notFound: {
        status: 404,
        code: "NotFound",
        message: "resource not found",
    },
    invalidRequest: {
        status: 406,
        code: "InvalidRequest",
    },
    internalError: {
        status: 500,
        code: "internalError",
        message: "internal error",
    },
    userNotFound: {
        status: 404,
        code: "NotFound",
        message: "User not found",
    },
    userAccountNotVerified: {
        status: 401,
        code: "NotVerified",
        message: "Please verify your account first.",
    },
};

export const errors = Object.keys(errorCodes);

export const getErrorByCode = (code: keyof typeof errorCodes): ErrorDetail => errorCodes[code];
