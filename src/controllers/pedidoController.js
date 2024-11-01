const Pedido = require('../models/pedido');

exports.createPedido = async (req, res) => {
  const { cliente_id } = req.body;

  try {
    const pedido = await Pedido.create({ cliente_id });
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
};

exports.listarPedidos = async (req, res) => {

  try {
    const pedidos = await Pedido.findAll()
    res.status(200).json(pedidos)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os pedidos' })
  }
}

exports.updatePedido = async (req, res) => {
  const { pedido_id } = req.params;
  const { cliente_id, data_compra } = req.body;

  try {
    const pedido = await Pedido.findByPk(pedido_id);
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    pedido.cliente_id = cliente_id;
    pedido.data_compra = data_compra;
    await pedido.save();
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar pedido' });
  }
};

exports.deletePedido = async (req, res) => {
  const { pedido_id } = req.params;

  try {
    const pedido = await Pedido.findByPk(pedido_id);
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    await pedido.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir pedido' });
  }
};