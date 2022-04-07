import Card from "../Card";
import "./style.css";
import svg from "./../../img/nenhum.svg";
import { useState, useEffect } from "react";

const List = ({
  listTransactions,
  setListTransactions,
  setNewList,
  newList,
}) => {
  const filterAll = () => {
    setNewList(listTransactions);
  };

  const filterEntry = () => {
    const filteredEntry = listTransactions.filter((item) => {
      return item.type === "Entrada";
    });
    setNewList([...filteredEntry]);
  };

  const filterExpenses = () => {
    const filteredExpenses = listTransactions.filter((item) => {
      return item.type === "Saída";
    });
    setNewList([...filteredExpenses]);
  };

  console.log(newList);
  console.log(listTransactions);

  // console.log(newList.length);

  return (
    <div className="Div-list">
      <div className="Div-listNav">
        <div className="Div-listP">
          <p>Resumo financeiro</p>
        </div>
        <div className="Div-listButtons">
          <button className="List-buttonOne" onClick={() => filterAll()}>
            Todos
          </button>
          <button className="List-buttonTwo" onClick={() => filterEntry()}>
            Entradas
          </button>
          <button className="List-buttonThree" onClick={() => filterExpenses()}>
            Despesas
          </button>
        </div>
      </div>
      <div className="Div-listCard">
        {newList.length > 0 ? (
          newList.map((transaction, index) => (
            <Card
              list={newList}
              setNewList={setNewList}
              listTransactions={listTransactions}
              transaction={transaction}
              key={index}
              setListTransactions={setListTransactions}
            />
          ))
        ) : (
          <img src={svg} alt=""></img>
        )}
      </div>
    </div>
  );
};
export default List;
