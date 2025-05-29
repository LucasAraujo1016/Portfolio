const apiRoutes = require('./db');
const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/api', apiRoutes);
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fatec',
    database: 'portfolio'
});

db.connect(err => {
    if (err) throw err;
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const contatos = {
    email: 'lucas.allbuquerque1234@gmail.com',
    telefone: '(12) 99782-8322',
    linkedin: 'https://www.linkedin.com/in/lucas-araujo-448115329/',
    github: 'https://github.com/LucasAraujo1016'
};

const competencias = {
    frontEnd: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'TypeScript'],
    backEnd: ['Python', 'Node.js', 'Flask', 'MySQL']
};

app.get('/', (req, res) => res.redirect('/sobre'));

app.get('/sobre', (req, res) => {
    res.render('sobre', {
        nome: 'Lucas Araujo',
        cargo: 'Desenvolvedor de software',
        competencias,
        contatos
    });
});

app.get('/projetos', (req, res) => {
    const projetos = [
        {
            titulo: 'API 2º semestre/2024 - Acompanhamento dos Vereadores em SJC',
            descricao: 'O projeto teve como objetivo desenvolver uma plataforma interativa para acompanhar o desempenho dos vereadores em exercício na cidade de São José dos Campos. A iniciativa surgiu da necessidade de aumentar a transparência e permitir que os cidadãos pudessem avaliar de forma clara e objetiva as atividades dos seus representantes. A plataforma possui uma seção dedicada a apresentar todos os vereadores, onde cada um tem uma página dedicada com mais informações, além de uma ferramenta que permite aos eleitores compararem o desempenho de diferentes vereadores. O projeto visou não apenas informar os cidadãos sobre o trabalho dos vereadores, mas também incentivá-los a participar mais ativamente da política local.',
            imagem: 'API 1.png',
            link: 'https://github.com/matheuskarnas/API-1?tab=readme-ov-file'
        },

        {
            titulo: 'API 1º semestre/2025 - Dashboard web com dados do impacto',
            descricao: 'Desenvolvimento de um dashboard interativo e responsivo com o objetivo de monitorar os principais indicadores de desempenho e impacto da plataforma. Este painel foi idealizado para fornecer uma visão clara e em tempo real dos resultados alcançados, facilitando a tomada de decisões estratégicas por parte de patrocinadores, stakeholders e a equipe de produto.',
            imagem: 'API-2.png',
            link: 'https://github.com/matheuskarnas/API-2'
        }
    ];

    res.render('projetos', {
        projetos,
        contatos
    });
});

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
