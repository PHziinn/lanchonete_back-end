import jwt from 'jsonwebtoken';


export default {
    authUser(req, res, next){
    const JWT_SECRET = process.env.JWT_SECRET
    try {
      const token = req.headers.authorization.replace("Bearer ", "");
      const decoded = jwt.verify(token, JWT_SECRET);
      req.userData = decoded;
      next();
    } catch (error) {
      return res.status(401).json({msg: "Autenticacao falhou, reveja seu token."});
    }
  },
}
