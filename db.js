const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const projetosPath = path.join(__dirname, 'projetos.json');
const competenciasPath = path.join(__dirname, 'competencias.json');
const contatosPath = path.join(__dirname, 'contatos.json');

function readJson(filePath) {
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

router.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuario', (err, results) => {
        if (err) return res.status(500).json({ erro: err });
        res.json(results);
    });
});

router.post('/usuarios', (req, res) => {
    const { nome } = req.body;
    db.query('INSERT INTO usuario (usu_nome) VALUES (?)', [nome], (err, result) => {
        if (err) return res.status(500).json({ erro: err });
        res.status(201).json({ id: result.insertId });
    });
});

router.put('/usuarios/:id', (req, res) => {
    const { nome } = req.body;
    db.query('UPDATE usuario SET usu_nome = ? WHERE usu_id = ?', [nome, req.params.id], (err) => {
        if (err) return res.status(500).json({ erro: err });
        res.json({ mensagem: 'Usuário atualizado' });
    });
});

router.delete('/usuarios/:id', (req, res) => {
    db.query('DELETE FROM usuario WHERE usu_id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ erro: err });
        res.json({ mensagem: 'Usuário excluído' });
    });
});

router.get('/contatos', (req, res) => {
    const contatos = readJson(contatosPath);
    res.json(contatos);
});

router.get('/contatos/:id', (req, res) => {
    const contatos = readJson(contatosPath);
    const contato = contatos.find(c => c.id == req.params.id);
    if (!contato) return res.status(404).json({ erro: 'Contato não encontrado' });
    res.json(contato);
});

router.post('/contatos', (req, res) => {
    const contatos = readJson(contatosPath);
    const novoContato = { id: Date.now(), ...req.body };
    contatos.push(novoContato);
    writeJson(contatosPath, contatos);
    res.status(201).json(novoContato);
});

router.put('/contatos/:id', (req, res) => {
    const contatos = readJson(contatosPath);
    const idx = contatos.findIndex(c => c.id == req.params.id);
    if (idx === -1) return res.status(404).json({ erro: 'Contato não encontrado' });
    contatos[idx] = { ...contatos[idx], ...req.body };
    writeJson(contatosPath, contatos);
    res.json(contatos[idx]);
});

router.delete('/contatos/:id', (req, res) => {
    let contatos = readJson(contatosPath);
    const idx = contatos.findIndex(c => c.id == req.params.id);
    if (idx === -1) return res.status(404).json({ erro: 'Contato não encontrado' });
    contatos.splice(idx, 1);
    writeJson(contatosPath, contatos);
    res.json({ mensagem: 'Contato excluído' });
});

router.get('/competencias', (req, res) => {
    const competencias = readJson(competenciasPath);
    res.json(competencias);
});

router.get('/competencias/:id', (req, res) => {
    const competencias = readJson(competenciasPath);
    const competencia = competencias.find(c => c.id == req.params.id);
    if (!competencia) return res.status(404).json({ erro: 'Competência não encontrada' });
    res.json(competencia);
});

router.post('/competencias', (req, res) => {
    const competencias = readJson(competenciasPath);
    const novaCompetencia = { id: Date.now(), ...req.body };
    competencias.push(novaCompetencia);
    writeJson(competenciasPath, competencias);
    res.status(201).json(novaCompetencia);
});

router.put('/competencias/:id', (req, res) => {
    const competencias = readJson(competenciasPath);
    const idx = competencias.findIndex(c => c.id == req.params.id);
    if (idx === -1) return res.status(404).json({ erro: 'Competência não encontrada' });
    competencias[idx] = { ...competencias[idx], ...req.body };
    writeJson(competenciasPath, competencias);
    res.json(competencias[idx]);
});

router.delete('/competencias/:id', (req, res) => {
    let competencias = readJson(competenciasPath);
    const idx = competencias.findIndex(c => c.id == req.params.id);
    if (idx === -1) return res.status(404).json({ erro: 'Competência não encontrada' });
    competencias.splice(idx, 1);
    writeJson(competenciasPath, competencias);
    res.json({ mensagem: 'Competência excluída' });
});

router.get('/projetos', (req, res) => {
    const projetos = readJson(projetosPath);
    res.json(projetos);
});

router.get('/projetos/:id', (req, res) => {
    const projetos = readJson(projetosPath);
    const projeto = projetos.find(p => p.id == req.params.id);
    if (!projeto) return res.status(404).json({ erro: 'Projeto não encontrado' });
    res.json(projeto);
});

router.post('/projetos', (req, res) => {
    const projetos = readJson(projetosPath);
    const novoProjeto = { id: Date.now(), ...req.body };
    projetos.push(novoProjeto);
    writeJson(projetosPath, projetos);
    res.status(201).json(novoProjeto);
});

router.put('/projetos/:id', (req, res) => {
    const projetos = readJson(projetosPath);
    const idx = projetos.findIndex(p => p.id == req.params.id);
    if (idx === -1) return res.status(404).json({ erro: 'Projeto não encontrado' });
    projetos[idx] = { ...projetos[idx], ...req.body };
    writeJson(projetosPath, projetos);
    res.json(projetos[idx]);
});

router.delete('/projetos/:id', (req, res) => {
    let projetos = readJson(projetosPath);
    const idx = projetos.findIndex(p => p.id == req.params.id);
    if (idx === -1) return res.status(404).json({ erro: 'Projeto não encontrado' });
    projetos.splice(idx, 1);
    writeJson(projetosPath, projetos);
    res.json({ mensagem: 'Projeto excluído' });
});

module.exports = router;
