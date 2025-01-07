import './header.scss';

function Header() {
  return (
    <header className="header bg-danger text-light text-center">
      <div className="container">
        <h1 className="display-4">Markdown Previewer</h1>
        <p className="lead">A simple tool to preview Markdown</p>
      </div>
    </header>
  );
};

export default Header;