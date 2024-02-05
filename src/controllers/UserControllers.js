import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "../../config/connection.js";

export default {
  async registrarUser(req, res) {
    const { email, senha } = req.body;
    const verificaEmail = await prisma.usuario.findFirst({
      where: {
        email: email,
      },
    });

    try {
      if (verificaEmail) {
        return res.status(403).json({
          message: "email já está em uso",
        });
      } else {
        //gerar uuid para usuario
        const usuarioId = uuidv4();
        //encripta senha passada pelo usuario
        bcrypt.hash(senha, 10).then(async (hash) => {
          //Registrando usuario
          const usuario = await prisma.usuario.create({
            data: {
              usuarioId: usuarioId,
              email: email,
              senha: hash,
            },
          });
          return res.status(201).json(usuario);
        });
      }
    } catch (error) {
      return res.status(412).send({
        success: false,
        message: error.message,
      });
    }
  },
  async loginUser(req, res) {
    const { email, senha } = req.body;

    // define a variavel para usuario
    let obterUsuario;

    //verifica se o usuario existe com o email passado
    prisma.usuario
      .findFirst({
        where: {
          email: email,
        },
      })
      .then((usuario) => {
        if (!usuario) {
          //se o usuario não existir retorna um erro informando que o mesmo não existe
          return res.status(401).json({
            message: "Autenticacao falhou, usuario não encontrado.",
          });
        }
        //Atribui o usuario encontrado a variavel obter usuario.
        obterUsuario = usuario;
        /*
    Neste momento é hora de comparar a senha informada com a senha 
    do usuario no banco de dados
    */
        return bcrypt.compare(senha, usuario.senha);
      })
      .then((response) => {
        if (!response) {
          return res.status(401).json({
            message: "Falha de autenticaçao.",
          });
        } else {
          let jwtToken = jwt.sign(
            {
              email: obterUsuario.email,
              userId: obterUsuario.usuarioId,
            },
            //pega o codigo de encriptação na variavel JWT_SECRET em .env
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            accessToken: jwtToken,
            // retornaremos também o id do usuario junto ao token, serve para ajudar a identificar o usuario
            userId: obterUsuario.usuarioId,
          });
        }
      })
      .catch((err) => {
        return res.status(401).json({
          messgae: err.message,
          success: false,
        });
      });
  },
};
