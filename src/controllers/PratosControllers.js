import { prisma } from '../../config/connection.js';

export default{
  async createPrato(req, res){
    try {
      const { nome, descricao, ingredientes, valor, tempoPreparo } = req.body;
      const prato = await prisma.prato.create({
        data: {
          nome,
          descricao,
          ingredientes,
          valor,
          tempoPreparo,
        },
      });
      
      return res.status(201).json(prato);
    } catch (error) {
      return res.status(400).json({msg: 'Error ao Cria Prato! ' + error});
    }
  },

  async listPratos(req, res){
    try {
      const pratos = await prisma.prato.findMany({
        orderBy: {
          id: 'desc',
        }
      })

      return res.status(200).json(pratos);
    } catch (error) {
      return res.status(400).json({msg: 'Error ao Listrar Pratos! ' + error});
      
    }
  },

  async listPrato(req, res){
    try {
      const { id } = req.params
      const prato = await prisma.prato.findUnique({
        where: {
          id: Number(id)
        }
      })

      return res.status(200).json(prato);
    } catch (error) {
      return res.status(400).json({msg: 'Error ao Listrar Prato! ' + error});
    }
  },

  async updatePrato(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao, ingredientes, valor, tempoPreparo } = req.body;
      const prato = await prisma.prato.update({
        where:{
          id: Number(id)
        },
        data:{
          nome,
          descricao,
          ingredientes,
          valor,
          tempoPreparo
        }
      })

      return res.status(200).json(prato);
    } catch (error) {
      return res.status(400).json({msg: 'Error a Atualizar Prato! ' + error});
      
    }
  },

  async deletePrato(req, res) {
    try {
      const { id } = req.params;
      const prato = await prisma.prato.delete({
        where:{
          id: Number(id)
        }
      })

      if(!prato){
        return res.status(404).json({msg: 'Prato inexistente!'});
      }
      return res.status(200).json({msg: 'Prato deletado com Sucesso!'});
    } catch (error) {
      return res.status(400).json({msg: 'Error ao deletar Prato! ' + error});
      
    }
  },

  

}