import bcrypt, { compare } from "bcrypt";

export const encrypt = async (password) => {
  return await bcrypt
    .hash(password, 10)
    .then((hash) => hash)
    .catch((err) => err);
};
export const comparePassword = async (password, hash) => {
  return bcrypt
    .compare(myPlaintextPassword, hash)
    .then((result) => true)
    .catch((err) => err);
};
