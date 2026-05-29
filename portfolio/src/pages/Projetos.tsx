import projetos from '../data/projetos';
import type { Projeto } from '../types';

const Projetos = () => {
  return (
    <main>
      <section className="projetos" id="projetos">
        <h1>Projetos</h1>
        <p>
          Nesta seção, você encontrará projetos que desenvolvi ao longo da minha trajetória.
          Cada projeto reflete minha paixão por inovação e aprendizado, abrangendo diversas
          áreas e tecnologias. Sinta-se à vontade para explorar e conhecer mais sobre cada um deles!
        </p>

        <div className="projetos-lista">
          {projetos.map((proj: Projeto) => (
            <div className="api-1" key={proj.id}>
              <h2>{proj.titulo}</h2>
              <p>
                {proj.descricao.split('\n').map((linha, i) => (
                  <span key={i}>{linha}<br /></span>
                ))}
              </p>
              <img
                className="api1-img"
                src={`/statics/${proj.imagem}`}
                alt={proj.titulo}
              />
              <button
                className="github-api1"
                onClick={() => window.open(proj.link, '_blank')}
              >
                GitHub do projeto
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projetos;