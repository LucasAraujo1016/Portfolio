const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fatec',
    database: 'portfolio'
});

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
    db.query('SELECT * FROM contatos', (err, results) => {
        if (err) return res.status(500).json({ erro: err });
        res.json(results);
    });
});

router.get('/contatos/usuario/:usu_id', (req, res) => {
    db.query('SELECT * FROM contatos WHERE usu_id = ?', [req.params.usu_id], (err, results) => {
        if (err) return res.status(500).json({ erro: err });
        res.json(results);
    });
});

router.post('/contatos', (req, res) => {
    const { cont_email, cont_telefone, cont_linkedin, cont_github, usu_id } = req.body;

    if (!usu_id) {
        return res.status(400).json({ erro: 'Usuário ID é obrigatório' });
    }

    db.query(
        'INSERT INTO contatos (cont_email, cont_telefone, cont_linkedin, cont_github, usu_id) VALUES (?, ?, ?, ?, ?)',
        [cont_email, cont_telefone, cont_linkedin, cont_github, usu_id],
        (err, result) => {
            if (err) return res.status(500).json({ erro: err });
            res.status(201).json({ mensagem: 'Contato inserido', id: result.insertId });
        }
    );
});

router.put('/contatos/:id', (req, res) => {
    const { cont_email, cont_telefone, cont_linkedin, cont_github } = req.body;
    db.query(
        'UPDATE contatos SET cont_email = ?, cont_telefone = ?, cont_linkedin = ?, cont_github = ? WHERE cont_id = ?',
        [cont_email, cont_telefone, cont_linkedin, cont_github, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ erro: err });
            res.json({ mensagem: 'Contato atualizado' });
        }
    );
});

router.delete('/contatos/:id', (req, res) => {
    db.query('DELETE FROM contatos WHERE cont_id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ erro: err });
        res.json({ mensagem: 'Contato excluído' });
    });
});

router.get('/competencias', (req, res) => {
    db.query('SELECT * FROM competencias', (err, results) => {
        if (err) return res.status(500).json({ erro: err });
        res.json(results);
    });
});

router.get('/competencias/usuario/:usu_id', (req, res) => {
    db.query('SELECT * FROM competencias WHERE usu_id = ?', [req.params.usu_id], (err, results) => {
        if (err) return res.status(500).json({ erro: err });
        res.json(results);
    });
});

router.post('/competencias', (req, res) => {
    const { comp_frontend, comp_backend, usu_id } = req.body;

    if (!usu_id) {
        return res.status(400).json({ erro: 'Usuário ID é obrigatório' });
    }

    db.query(
        'INSERT INTO competencias (comp_frontend, comp_backend, usu_id) VALUES (?, ?, ?)',
        [comp_frontend, comp_backend, usu_id],
        (err, result) => {
            if (err) return res.status(500).json({ erro: err });
            res.status(201).json({ mensagem: 'Competência inserida', id: result.insertId });
        }
    );
});

router.put('/competencias/:id', (req, res) => {
    const { comp_frontend, comp_backend } = req.body;
    db.query(
        'UPDATE competencias SET comp_frontend = ?, comp_backend = ? WHERE comp_id = ?',
        [comp_frontend, comp_backend, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ erro: err });
            res.json({ mensagem: 'Competência atualizada' });
        }
    );
});

router.delete('/competencias/:id', (req, res) => {
    db.query('DELETE FROM competencias WHERE comp_id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ erro: err });
        res.json({ mensagem: 'Competência excluída' });
    });
});

router.get('/projetos', (req, res) => {
    db.query('SELECT * FROM projetos', (err, results) => {
        if (err) return res.status(500).json({ erro: err });
        res.json(results);
    });
});

router.get('/projetos/usuario/:usu_id', (req, res) => {
    db.query('SELECT * FROM projetos WHERE usu_id = ?', [req.params.usu_id], (err, results) => {
        if (err) return res.status(500).json({ erro: err });
        res.json(results);
    });
});

router.get('/projetos/:usu_id/:pro_id', (req, res) => {
    db.query('select * from projetos where usu_id = ? and pro_id = ?', [req.params.usu_id, req.params.pro_id], (err, results) => {
        if (err) return res.status(500).json({ erro: err });
        if (results.length === 0) return res.status(404).json({ erro: 'Projeto não encontrado' });
        res.json(results);
    });
});

router.post('/projetos', (req, res) => {
    const { pro_titulo, pro_descricao, pro_imagem, pro_link, usu_id } = req.body;

    if (!usu_id || !pro_titulo || !pro_descricao || !pro_imagem || !pro_link) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
    }

    db.query(
        'INSERT INTO projetos (pro_titulo, pro_descricao, pro_imagem, pro_link, usu_id) VALUES (?, ?, ?, ?, ?)',
        [pro_titulo, pro_descricao, pro_imagem, pro_link, usu_id],
        (err, result) => {
            if (err) return res.status(500).json({ erro: err });
            res.status(201).json({ mensagem: 'Projeto inserido', id: result.insertId });
        }
    );
});

router.put('/projetos/:id', (req, res) => {
    const { pro_titulo, pro_descricao, pro_imagem, pro_link } = req.body;
    db.query(
        'UPDATE projetos SET pro_titulo = ?, pro_descricao = ?, pro_imagem = ?, pro_link = ? WHERE pro_id = ?',
        [pro_titulo, pro_descricao, pro_imagem, pro_link, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ erro: err });
            res.json({ mensagem: 'Projeto atualizado' });
        }
    );
});

router.delete('/projetos/:id', (req, res) => {
    db.query('DELETE FROM projetos WHERE pro_id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ erro: err });
        res.json({ mensagem: 'Projeto excluído' });
    });
});

module.exports = router;
