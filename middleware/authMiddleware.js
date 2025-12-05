export const Protect = (req, res, next) => {
  console.log("Protect middleware executed (placeholder)");
  next();
};
