export const isValidToken = (token) => {
  let decoded = jwt.decode(token);
  return new Date(decoded.exp * 1000) > new Date() ? decoded : null;
};
