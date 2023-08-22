const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const isNotEmpty = (value) => {
  return value.length > 0;
};

export default { validateEmail, isNotEmpty };
