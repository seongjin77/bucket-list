export const validator = {
    email(value) {
        const result = EMAIL_PATTERN.test(value);
        return {
            value: result,
            message: result ? "" : ValidationError.EMAIL_ERROR,
        };
    },
    password(value) {
        const result = value.length >= 8;
        return {
            value: result,
            message: result ? "" : ValidationError.PASSWORD_ERROR,
        };
    },
};

const EMAIL_PATTERN = /@/


export const ValidationError = {
    EMAIL_ERROR: "@를 포함하여 입력해주세요.",
    PASSWORD_ERROR: "8자리 이상 입력해주세요.",
    PASSWORD_CHECK_ERROR: "패스워드와 동일하게 입력해주세요.",
};
