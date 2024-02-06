import { prisma } from '../config/connection.js';
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

//gerar uuid para usuario
const usuarioId = uuidv4()
 //encripta senha passada pelo usuario
bcrypt.hash('admin', 10)
.then(async (hash) => {
    //registrando usuario
    console.log("Registrando usuario..")
    const usuario = await prisma.usuario.create({
        data: {
            usuarioId: usuarioId,
            email: 'admin@admin.com',
            senha: hash
        }
    });
    console.log(`${usuario.email} registrado.`)
})
