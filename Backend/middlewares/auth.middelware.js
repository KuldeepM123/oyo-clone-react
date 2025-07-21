import jwt from "jsonwebtoken";

export const auth = {
  verifyToken: (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(401).json({ message: "Not Authenticated" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token is not valid" });
      }
    });
    req.user = user;
    next();
  },

  verifyToken: (req, res, next) => {
    auth.verifyToken(req, res, () => {
      if (req.user._id === req.params.id) {
        next();
      } else {
        return res.status(403).json({ message: "Unauthrized" });
      }
    });
  },
};
