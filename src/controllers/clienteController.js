
const Cliente = require('../models/cliente');

exports.createCliente = async (req, res) => {
  const { cliente_nome, cliente_email } = req.body;

  try {
    const cliente = await Cliente.create({ cliente_nome, cliente_email });
    res.status(201).json(cliente);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
};

exports.listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll()
    res.status(200).json(clientes)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar os clientes' })
  }
}

exports.updateCliente = async (req, res) => {
  const { cliente_id } = req.params;
  const { cliente_nome, cliente_email } = req.body;

  try {
    const cliente = await Cliente.findByPk(cliente_id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    cliente.cliente_nome = cliente_nome;
    cliente.cliente_email = cliente_email;
    await cliente.save();
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar cliente' });
  }
};

exports.deleteCliente = async (req, res) => {
  const { cliente_id } = req.params;

  try {
    const cliente = await Cliente.findByPk(cliente_id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    await cliente.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir cliente' });
  }
};