const apiRoutes = require('./db');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use('/api', apiRoutes);
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.redirect('/sobre'));

app.get('/sobre', async (req, res) => {
    try {
        const contatosRes = await axios.get('http://localhost:3000/api/contatos');
        const competenciasRes = await axios.get('http://localhost:3000/api/competencias');
        const contatos = contatosRes.data[0] || {};
        const competencias = competenciasRes.data[0] || { frontEnd: [], backEnd: [] };
        res.render('sobre', {
            nome: 'Lucas Araujo',
            cargo: 'Desenvolvedor de software',
            competencias,
            contatos
        });
    } catch (err) {
        res.status(500).send('Erro ao buscar dados do back-end');
    }
});

app.get('/projetos', async (req, res) => {
    try {
        const projetosRes = await axios.get('http://localhost:3000/api/projetos');
        const contatosRes = await axios.get('http://localhost:3000/api/contatos');
        const projetos = projetosRes.data || [];
        const contatos = contatosRes.data[0] || {};
        res.render('projetos', {
            projetos,
            contatos
        });
    } catch (err) {
        res.status(500).send('Erro ao buscar projetos');
    }
});

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
