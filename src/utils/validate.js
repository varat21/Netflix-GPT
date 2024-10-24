export const ValidateData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(
    email
  );
  const isPasswordValid = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/.test(password);
  const isNameValid = /^[a-zA-Z\s]+$/.test(name); // Name should only contain alphabets and spaces
  if (!isEmailValid) return "* Email is not valid";
  if (!isPasswordValid) return "* Password is not valid";
  if (!isNameValid ) return "* Name is not valid";

  return null;
};
