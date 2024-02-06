import jwt from 'jsonwebtoken';


export default {
    authUser(req, res, next){
    try {
      const token = req.headers.authorization.replace("Bearer ", "");
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userData = decoded;
      next();
    } catch (error) {
      return res.status(401).json({msg: "Autenticacao falhou, reveja seu token."});
    }
  },
}
