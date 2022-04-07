import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const filteredAdd = listTransactions.filter((item) => {
    return item.type === "Entrada";
  });

  const filteredSub = listTransactions.filter((item) => {
    return item.type === "Saída";
  });

  const sub = filteredSub.reduce((acc, total) => {
    return acc + total.value;
  }, 0);

  const add = filteredAdd.reduce((acc, total) => {
    return acc + total.value;
  }, 0);

  return (
    <div className="Div-total">
      <div className="Div-totalValor">
        <p className="Valor-total">Valor Total:</p>
        <p className="Valor-referente">O valor se refere ao saldo</p>
      </div>
      <div className="Div-totalNumber">
        <p>${add - sub}</p>
      </div>
    </div>
  );
};
export default TotalMoney;
