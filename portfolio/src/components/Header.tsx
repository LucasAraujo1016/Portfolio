import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <NavLink
          to="/sobre"
          className={({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''}
        >
          Sobre
        </NavLink>
        <NavLink
          to="/projetos"
          className={({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''}
        >
          Projetos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;