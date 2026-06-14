import type { Projeto } from "../types";

const projetos: Projeto[] = [
    {
        id: 1750539140267,
        titulo: "API 2º semestre/2024",
        subtitulo: "Acompanhamento dos Vereadores em SJC",
        semestre: "1º Semestre FATEC",
        status: "Concluído",
        cliente: "Professor Fernando Masanori",
        descricao: "Muitas vezes os eleitores não possuem acesso às informações detalhadas e claras sobre os candidatos a vereadores de sua cidade, ficando assim no \"escuro\" sobre aqueles que deveriam representar a vontade da população. Com isso o projeto teve como objetivo desenvolver uma plataforma web para acompanhar o desempenho dos vereadores em exercício na cidade de São José dos Campos, aumentando a transparência e permitindo que os cidadãos avaliem de forma clara e objetiva as atividades realizadas por seus representantes.",
        imagem: "API-1.png",
        link: "https://github.com/matheuskarnas/API-1?tab=readme-ov-file",
        tecnologias: ["HTML", "CSS", "Tailwind", "Python", "Flask", "MySQL"],
        contribuicoes: [
            "Desenvolvimento da Página de informações do candidato utilizando HTML, CSS e Tailwind, com informações como projetos, métricas de suas ações e uma seção de comentários.",
            "Desenvolvimento da Seção de comentários, sendo também responsável por sua integração backend e conexão com o banco de dados, utilizando MySQL e JavaScript.",
            "Ajuste de responsividade na página do candidato e na página de comparação entre candidatos, permitindo melhor navegação em dispositivos móveis."
        ],
        hardSkills: "Figma / HTML5 / CSS3 / MySQL / Python (Flask): Realizo com autonomia.",
        softSkills: [
            "Aprendizado: Dediquei meu tempo para aprender as novas tecnologias utilizadas no projeto, principalmente front-end e comunicação com banco de dados.",
            "Trabalho em equipe: Pela primeira vez participei de um time nessas condições, aprimorando habilidades de comunicação e entendendo o básico sobre divisão de tarefas e o método Scrum."
        ]
    },
    {
        id: 1750539258446,
        titulo: "API 1º semestre/2025",
        subtitulo: "Dashboard web com dados de impacto",
        semestre: "2º Semestre FATEC",
        status: "Concluído",
        cliente: "Helpnei",
        descricao: "A Helpnei é uma plataforma voltada para vendas diretas com ferramentas de gestão de links. Eles tinham dificuldade em oferecer de forma clara e transparente indicadores de resultados para os usuários. Para solucionar isso foi criado um dashboard interativo para monitorar indicadores de desempenho e impacto, com visão clara e em tempo real dos resultados alcançados, facilitando a tomada de decisões estratégicas por parte de patrocinadores, stakeholders e a equipe de produto.",
        imagem: "API-2.png",
        link: "https://github.com/matheuskarnas/API-2",
        tecnologias: ["HTML", "Tailwind", "TypeScript", "JavaScript", "React", "Node.js", "MySQL", "Supabase"],
        contribuicoes: [
            "Modelagem conjunta do Banco de Dados utilizando MySQL.",
            "Desenvolvimento de um Modal para cada indicador da plataforma, contendo um Gráfico que mostra o crescimento ao longo do tempo da métrica selecionada, com filtros de período (ano, mês, semana, dia ou personalizado) usando a tecnologia Recharts.",
            "Estabelecimento da comunicação entre as Métricas apresentadas nos gráficos e o banco de dados."
        ],
        hardSkills: "JavaScript: Realizo com auxílio. Git / Figma / HTML5 / CSS3 / React / TypeScript / MySQL: Realizo com autonomia.",
        softSkills: [
            "Comunicação: Me senti mais à vontade para expressar opiniões e auxiliar no desenvolvimento, aumentando a comunicação com a equipe de forma detalhada e frequente.",
            "Gerenciamento de tempo: Desenvolvi comprometimento com a entrega de tarefas dentro do prazo pré-determinado, entendendo a importância de seguir um cronograma."
        ]
    },
    {
        id: 1750539258447,
        titulo: "API 2º semestre/2025",
        subtitulo: "Sistema de gerenciamento de tarefas — SideQuest",
        semestre: "3º Semestre FATEC",
        status: "Concluído",
        cliente: "GSW",
        descricao: "Em muitas equipes, o gerenciamento de tarefas ainda é feito de forma descentralizada, utilizando planilhas e ferramentas pouco integradas. O projeto SideQuest é uma plataforma moderna e intuitiva para centralizar o gerenciamento de tarefas, com criação de projetos, sistema de membros, tarefas divididas em 3 status (Pendente, Desenvolvimento e Concluída), métricas de andamento, dashboard pessoal e sistema de avisos.",
        imagem: "API-3.png",
        link: "https://github.com/Syntax-Fatec-SJC/SideQuest",
        tecnologias: ["HTML", "Tailwind", "TypeScript", "React", "Java", "Spring Boot", "MongoDB"],
        contribuicoes: [
            "Atuação como Scrum Master, sendo responsável por acompanhar o processo da equipe e garantir um ritmo bom e adequado.",
            "Desenvolvimento da Página de Tarefas seguindo o padrão estabelecido pela equipe no Figma, utilizando React.",
            "Auxílio na Refatoração do Back-end da aplicação em Java e Spring Boot nos requisitos da segunda e terceira sprint."
        ],
        hardSkills: "Java / Spring Boot: Realizo com auxílio. Git / Jira / Figma / HTML5 / CSS3 / TypeScript / React / MongoDB: Realizo com autonomia.",
        softSkills: [
            "Adaptabilidade: O projeto exigiu diversas mudanças, ajustando funcionalidades já existentes principalmente no back-end em Java.",
            "Organização e planejamento: Como Scrum Master percebi como a organização e o planejamento são até mais importantes que o desenvolvimento em si.",
            "Comunicação: Desenvolvi habilidades de comunicação indo além da barreira da vergonha, realizando reuniões mais frequentes e auxiliando na distribuição de tarefas."
        ]
    },
    {
        id: 1750539258448,
        titulo: "API 1º semestre/2026",
        subtitulo: "Monitoramento de estações IoT — Sky Emperor",
        semestre: "4º Semestre FATEC",
        status: "Concluído",
        cliente: "Tecsus",
        descricao: "Perante as constantes mudanças climáticas, é de extrema importância monitorar cada detalhe do nosso ambiente. A Tecsus propôs um método eficiente de monitoramento com estações meteorológicas integradas a um sistema IoT. O Sky Emperor é uma plataforma que torna visuais as informações coletadas pelas estações cadastradas, estruturando todo o fluxo desde a coleta dos dados até a entrega ao usuário final, com controle de acesso rigoroso para organizações parceiras.",
        imagem: "API-4.png",
        link: "https://github.com/Inception-Fatec/api-4",
        tecnologias: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "C++", "EMQX", "Docker", "AWS"],
        contribuicoes: [
            "Desenvolvimento da Página de Login: interface de autenticação em Next.js, seguindo fielmente o padrão visual e arquitetural da equipe.",
            "Desenvolvimento do Subscriber: serviço de escuta no broker EMQX para capturar dados trafegados e garantir o armazenamento correto no banco de dados não relacional.",
            "Desenvolvimento do Publisher: programação do fluxo de envio de dados a partir de um sensor de temperatura e umidade conectado a uma placa ESP-32."
        ],
        hardSkills: "C++ / Docker / AWS: Realizo com auxílio. Next.js / EMQX: Realizo com autonomia.",
        softSkills: [
            "Pensamento Analítico e Resolução de Problemas: A responsabilidade de interligar o hardware ao banco de dados via EMQX exigiu uma postura extremamente analítica e uma visão lógica focada na raiz dos problemas técnicos.",
            "Trabalho em Equipe e Sincronia Multidisciplinar: Atuando nas duas pontas do projeto (front-end e back-end/IoT) aprendi a alinhar contratos de dados de forma clara para integração sem ruídos.",
            "Resiliência Técnica: Lidar com instabilidades de conexão e falhas em IoT solidificou minha capacidade de manter foco e produtividade sob pressão."
        ]
    }
];

export default projetos;