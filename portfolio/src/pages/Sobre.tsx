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
                Graduando em Desenvolvimento de Software Multiplataforma pela FATEC São José dos Campos.
                Minha conexão com tecnologia começou na infância através dos videogames, mas foi no ensino
                médio — influenciado por amigos da área — que decidi seguir essa carreira. Após uma breve
                passagem por Engenharia da Computação, encontrei na FATEC o ambiente certo: aprendizado
                prático, metodologia ágil Scrum e projetos reais com parceiros acadêmicos.
                <br /><br />
                Ao longo dos semestres, atuei tanto como desenvolvedor quanto como Scrum Master, o que
                fortaleceu minhas habilidades técnicas e minha capacidade de comunicação e liderança.
                Estou em busca de uma oportunidade de estágio para ingressar efetivamente no mercado e
                aprender com problemas reais.
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