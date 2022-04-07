import "./style.css";
import { FaTrash } from "react-icons/fa";
import { useEffect } from "react";

const Card = ({
  transaction,
  listTransactions,
  setListTransactions,
  setNewList,
  list,
}) => {
  const handleDelet = (item) => {
    const filtered = listTransactions.filter((itens) => {
      return itens !== item;
    });

    const filteredTwo = list.filter((itens) => {
      return itens !== item;
    });

    setNewList(filteredTwo);
    setListTransactions(filtered);
  };

  return (
    <div
      className={
        transaction.type === "Entrada" ? "Div-card-entrada" : "Div-card-saida"
      }
    >
      <div className="Div-transaction">
        <h2>{transaction.description}</h2>
        <p>{transaction.type}</p>
      </div>

      <div className="Div-valueDelete">
        <p>R$ {transaction.value}</p>
        <button type="button" onClick={() => handleDelet(transaction)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
export default Card;
