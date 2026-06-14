import competencias from '../data/competencias';

const Sobre = () => {
  return (
    <main>
      <section className="sobre" id="sobre">
        <div className="foto">
          <img className="minha-foto" src="/statics/minha_foto.jpg" alt="foto" />
        </div>
        <div className="card-sobre">
          <div className="card">
            <div className="card-body">
              <h2 style={{ textAlign: 'center' }}>Lucas Araujo</h2>
              <h3 style={{ textAlign: 'center' }}>Desenvolvedor Full Stack</h3>
              <h5 className="card-title">Olá, muito prazer!</h5>
              <p className="card-text">
                Graduando em Desenvolvimento de Software Multiplataforma pela FATEC São José dos Campos, com foco em desenvolvimento web e interesse em contribuir com equipes que trabalham com tecnologias modernas.
                Tenho experiência prática em projetos acadêmicos e pessoais envolvendo dashboards interativos, aplicações web e sistemas de dados. Sou motivado a aprender continuamente, tenho experiência em trabalhar em equipe e facilidade em me adaptar a novos desafios.<br></br> 
                Aberto a oportunidades de estágio e colaboração em projetos que me permitam desenvolver minhas habilidades e agregar valor para a empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="copetencias">
        <h1>Competências técnicas</h1>
        <div className="copetencias1">
          <div className="front_back">
            <h4>Frontend</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '1rem' }}>
              {competencias.frontEnd.map((tecnologia: string) => (
                <div className="icons" key={tecnologia}>
                  <img
                    src={`/statics/${tecnologia.toLowerCase()}.png`}
                    alt={tecnologia}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="front_back">
            <h4>Backend</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '1rem' }}>
              {competencias.backEnd.map((tecnologia: string) => (
                <div className="icons" key={tecnologia}>
                  <img
                    src={`/statics/${tecnologia.toLowerCase()}.png`}
                    alt={tecnologia}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;