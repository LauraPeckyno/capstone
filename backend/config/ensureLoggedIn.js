module.exports = (req, res, next) => {
    // Logic to check if the user is logged in
    if (req.user) {
      return next();
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  };