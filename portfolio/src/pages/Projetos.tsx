import { useState } from 'react';
import projetos from '../data/projetos';
import type { Projeto } from '../types';

const Projetos = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);

  const abrirModal = (proj: Projeto) => setProjetoSelecionado(proj);
  const fecharModal = () => setProjetoSelecionado(null);

  return (
    <main>
      <section className="projetos" id="projetos">
        <h1>Projetos</h1>
        <p>
          Nesta seção, você encontrará projetos que desenvolvi ao longo da minha trajetória.
          Cada projeto reflete minha paixão por inovação e aprendizado, abrangendo diversas
          áreas e tecnologias. Clique em um deles para saber mais!
        </p>

        <div className="projetos-lista">
          {projetos.map((proj: Projeto) => (
            <div className="api-1" key={proj.id}>
              <img
                className="api1-img"
                src={`/statics/${proj.imagem}`}
                alt={proj.titulo}
              />
              <h2>{proj.titulo}</h2>
              <p className="proj-subtitulo">{proj.subtitulo}</p>
              <button
                className="github-api1"
                onClick={() => abrirModal(proj)}
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {projetoSelecionado && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={fecharModal} aria-label="Fechar">✕</button>

            <div className="modal-header">
              <span className="modal-semestre">{projetoSelecionado.semestre}</span>
              <span className="modal-status">{projetoSelecionado.status}</span>
            </div>

            <h2 className="modal-titulo">{projetoSelecionado.titulo}</h2>
            <p className="modal-subtitulo">{projetoSelecionado.subtitulo}</p>

            <img
              className="modal-img"
              src={`/statics/${projetoSelecionado.imagem}`}
              alt={projetoSelecionado.titulo}
            />

            <div className="modal-section">
              <span className="modal-label">Parceiro Acadêmico</span>
              <p>{projetoSelecionado.cliente}</p>
            </div>

            <div className="modal-section">
              <span className="modal-label">Descrição</span>
              <p>{projetoSelecionado.descricao}</p>
            </div>

            <div className="modal-section">
              <span className="modal-label">Tecnologias Utilizadas</span>
              <div className="modal-tags">
                {projetoSelecionado.tecnologias.map((tec) => (
                  <span className="project-tag" key={tec}>{tec}</span>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <span className="modal-label">Contribuições Pessoais</span>
              <ul className="modal-list">
                {projetoSelecionado.contribuicoes.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <span className="modal-label">Hard Skills Desenvolvidas</span>
              <p>{projetoSelecionado.hardSkills}</p>
            </div>

            <div className="modal-section">
              <span className="modal-label">Soft Skills Desenvolvidas</span>
              <ul className="modal-list">
                {projetoSelecionado.softSkills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <a
              href={projetoSelecionado.link}
              target="_blank"
              rel="noreferrer"
              className="modal-github-btn"
            >
              Acessar Repositório ↗
            </a>
          </div>
        </div>
      )}
    </main>
  );
};

export default Projetos;