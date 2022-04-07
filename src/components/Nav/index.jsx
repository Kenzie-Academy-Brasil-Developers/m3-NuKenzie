import "./style.css";

const Nav = ({ setHomePage }) => {
  const handleHome = () => {
    setHomePage(true);
  };

  return (
    <nav className="App-nav">
      <div className="App-DivLogo">
        <p className="App-pOne">Nu</p>
        <p className="App-pTwo">Kenzie</p>
      </div>

      <div className="App-navButton">
        <button onClick={() => handleHome()}>Inicio</button>
      </div>
    </nav>
  );
};
export default Nav;
