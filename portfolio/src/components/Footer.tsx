import contato from '../data/contatos';

const Footer = () => {
  return (
    <footer id="contatos">
      <h1>Contato</h1>
      <p>Se você estiver interessado, pode entrar em contato comigo através das seguintes plataformas:</p>
      <div className="contato">
        <a href={contato.linkedin} target="_blank" rel="noreferrer">
          <img src="/statics/LinkedIn_logo.png" alt="Linkedin" />
        </a>
        <a href={contato.github} target="_blank" rel="noreferrer">
          <img src="/statics/github_logo.webp" alt="GitHub" />
        </a>
      </div>
      <p>Ou mande uma mensagem para os seguintes contatos:</p>
      <div className="mensagem">
        <div className="item">
          <img src="/statics/email.png" alt="email" />
          <span>{contato.email}</span>
        </div>
        <div className="item">
          <img src="/statics/telefone2.jpg" alt="telefone" />
          <span>{contato.telefone}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;