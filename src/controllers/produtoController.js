const Produto = require('../models/produto');

exports.createProduto = async (req, res) => {
  const { produto_nome, produto_preco, categoria_id } = req.body;

  try {
    const produto = await Produto.create({ produto_nome, produto_preco, categoria_id });
    res.status(201).json(produto);
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

exports.updateProduto = async (req, res) => {
  const { produto_id } = req.params;
  const { produto_nome, produto_preco, categoria_id } = req.body;

  try {
    const produto = await Produto.findByPk(produto_id);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    produto.produto_nome = produto_nome;
    produto.produto_preco = produto_preco;
    produto.categoria_id = categoria_id;
    await produto.save();
    res.json(produto);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

exports.deleteProduto = async (req, res) => {
  const { produto_id } = req.params;

  try {
    const produto = await Produto.findByPk(produto_id);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    await produto.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir produto' });
  }
};

exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar produtos' });
  }
};