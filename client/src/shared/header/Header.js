import "./style.css";

const Header = () => {
  return (
    <header className="bg-color-dark-gray">
      <div className="container-header text-color-light-gray">
        <a href="/" className="title-logo">
          <img src="img/logo.png" alt="Logo" />
          RAN DAAN DAAAAAN
        </a>

        <div className="nav-header">
          <a href="/ranking" className="nav-active">
            <img src="img/podium.png" alt="Pódio" /> Pódio
          </a>
          <a href="/history" className="nav-active">
            <img src="img/history.png" alt="História" /> História
          </a>
          <a href="/sign-up" className="nav-active">
            <img src="img/sign-up.png" alt="Cadastrar" /> Cadastrar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
