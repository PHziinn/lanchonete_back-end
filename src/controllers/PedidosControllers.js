import { prisma } from '../../config/connection.js';

export default {
  async createPedido(req, res){
    const { mesa, pratos } = req.body;
    try {
      const pedido = await prisma.pedido.create({
        data: {
          mesa,
          pratos: {
            connect: pratos,
          }
        },
      });

      return res.status(201).json(pedido);
    } catch (error) {
      return res.status(400).json({msg: 'Error ao Cria Pedido! ' + error});
      
    }
  },

  async listPedidos(req, res) {
    try {
      const pedidos = await prisma.pedido.findMany({
        orderBy: {
          id: 'desc',
        },
        include: {
          pratos: true
        }
      })

      return res.status(200).json(pedidos);
    } catch (error) {
      return res.status(400).json({msg: 'Error ao Listrar Pedidos! ' + error});
      
    }
  },

  async listPedido(req, res) {
    try {
      const { id } = req.params;
      const pedido = await prisma.pedido.findUnique({
        where:{
          id: Number(id)
        },
        include: {
          pratos: true
        }
      })
      
      return res.status(200).json(pedido);
    } catch (error) {
      return res.status(400).json({msg: 'Error ao Listrar Pedido! ' + error});
      
    }
  },

  async updatePedido(req, res) {
    try {
      const { atendimento } = req.body;
      const { id } = req.params;
      const pedido = await prisma.pedido.update({
        where: {
          id: Number(id)
        },
        data: {
          atendimento
        }
      });

      return res.status(200).json(pedido);
    } catch (error) {
      return res.status(400).json({msg: 'Error a Atualizar Pedido! ' + error});

    }
  },

  async deletePedido(req, res) {
    try {
      const { id } = req.params;
      const pedido = await prisma.pedido.delete({
        where:{
          id: Number(id)
        }
      })
      
      if(!pedido){
        return res.status(404).json({msg: 'Pedido inexistente!'});
      }

      return res.status(200).json({msg: 'Pedido deletado com Sucesso!'});
    } catch (error) {
      return res.status(400).json({msg: 'Error ao deletar Pedido! ' + error});
      
    }
  },
  
}