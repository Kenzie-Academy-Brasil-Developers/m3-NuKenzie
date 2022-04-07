import Nupng from "../../img/nukenzie.png";
import Cardpng from "../../img/card.png";
import "./style.css";

const HomePage = ({ homePage, setHomePage }) => {
  const handleHome = () => {
    setHomePage(false);
  };

  return (
    <div className={homePage !== false ? "Div-homeOn" : "Div-homeOff"}>
      <div className="Home-acesso">
        <img src={Nupng} alt="" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button onClick={() => handleHome()}>Iniciar</button>
      </div>

      <div className="Home-png">
        <img src={Cardpng} alt="" />
      </div>
    </div>
  );
};
export default HomePage;
