export const nameValidate = (name: string) => {
  if (/^[a-zA-Z]{2,50}$/.test(name)) {
    return true;
  }

  return false;
};
