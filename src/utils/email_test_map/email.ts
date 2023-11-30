export const emailValidate = (email: string) => {
    if (/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(email)){
        return true;
    }

    return false;
};