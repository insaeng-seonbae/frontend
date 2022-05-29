const validEmail = (email: string) => {
  // eslint-disable-next-line no-useless-escape
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regexEmail)) return true;
  else return false;
};

const validPassword = (password: string) => {
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password.match(regexPassword)) return true;
  else return false;
};

export { validEmail, validPassword };
