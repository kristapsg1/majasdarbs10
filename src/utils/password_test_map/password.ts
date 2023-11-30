export const passwordValidate = (password: string) => {
  if (
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[\.\*\\!@#$%^&*]).{8,}/.test(password)) {
    return true;
  }

  return false;
};
