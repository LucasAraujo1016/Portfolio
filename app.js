const apiRoutes = require('./db');
const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/api', apiRoutes);

/* const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fatec',
    database: 'portfolio'
}); */

/* db.connect(err => {
    if (err) throw err;
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
}); */

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
    backEnd: ['Python', 'Nodejs', 'Java', 'Flask', 'MySQL', 'MongoDB']
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
            descricao: 'O projeto teve como objetivo desenvolver uma plataforma interativa para acompanhar o desempenho dos vereadores em exercício na cidade de São José dos Campos. A iniciativa surgiu da necessidade de aumentar a transparência e permitir que os cidadãos avaliem de forma clara e objetiva as atividades dos seus representantes. A plataforma conta com uma seção dedicada à apresentação de todos os vereadores, oferecendo páginas individuais com informações detalhadas sobre cada um. Também foi implementada uma ferramenta de comparação de desempenho entre os vereadores, permitindo que os eleitores façam análises mais aprofundadas. Além disso, a plataforma inclui uma seção de comentários, incentivando os cidadãos a participarem ativamente da política local por meio de feedback e discussões públicas.',
            contribuicao: 'Minha contribuição: Fui responsável pela criação da estrutura da página que exibe as informações de cada vereador, organizando os dados de forma clara e acessível. Também desenvolvi a seção de comentários, realizando a integração com o banco de dados para garantir o armazenamento e a exibição dinâmica das interações dos usuários.',
            imagem: 'API 1.png',
            link: 'https://github.com/matheuskarnas/API-1?tab=readme-ov-file',
            tecnologias: ['HTML', 'CSS', 'Tailwind', 'Python', 'Flask', 'MySQL']
        },

        {
            titulo: 'API 1º semestre/2025 - Dashboard web com dados do impacto',
            descricao: 'Desenvolvimento de um dashboard interativo e responsivo com o objetivo de monitorar os principais indicadores de desempenho e impacto da plataforma. Este painel foi idealizado para fornecer uma visão clara e em tempo real dos resultados alcançados, facilitando a tomada de decisões estratégicas por parte de patrocinadores, stakeholders e a equipe de produto.',
            contribuicao: 'Minha contribuição: Nesse projeto, auxiliei na modelagem e criação do banco de dados que armazena os indicadores da plataforma. Além disso, fui responsável por desenvolver modais com gráficos interativos para cada card de informações dos patrocinadores, permitindo a visualização de dados filtrados por semana, mês, ano ou por um intervalo personalizado.',
            imagem: 'API-2.png',
            link: 'https://github.com/matheuskarnas/API-2',
            tecnologias: ['Tailwind', 'JavaScript', 'React', 'TypeScript', 'Nodejs', 'MySQL']
        },

        {
            titulo: "API 2º semestre/2025 - Sistema de gerenciamento de tarefas",
            descricao: "O projeto consistiu no desenvolvimento da SideQuest, uma plataforma moderna e intuitiva criada para centralizar o gerenciamento de tarefas dentro de equipes. A iniciativa surgiu da necessidade de substituir processos descentralizados — como planilhas, anotações manuais e ferramentas pouco integradas — que dificultavam o acompanhamento de prazos, a priorização de atividades e a comunicação entre os membros.\nA plataforma foi idealizada para oferecer uma visão clara do andamento das tarefas, permitindo colaboração em tempo real e a possibilidade de anexar documentos diretamente às atividades. Com isso, o projeto buscou reduzir atrasos, evitar retrabalhos e aumentar a produtividade das equipes.",
            contribuicao: "Nesse projeto, minha principal função foi atuar como Scrum Master, sendo responsável por acompanhar e ajustar o processo de trabalho da equipe. Além disso, também realizei ajustes em diversas páginas do sistema, tanto no front-end quanto no back-end.",
            imagem: "API-3.png",
            link: "https://github.com/Syntax-Fatec-SJC/SideQuest",
            tecnologias: ['Tailwind', 'React', 'TypeScript', 'Java', 'MongoDB']
        }
    ];

    res.render('projetos', {
        projetos,
        contatos
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`🚀 Servidor rodando na porta ${port}`);
});