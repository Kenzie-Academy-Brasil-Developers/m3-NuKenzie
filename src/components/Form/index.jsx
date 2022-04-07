import { useState } from "react";
import "./style.css";

const Form = ({ listTransactions, setLitsTransactions, setNewList }) => {
  const handleChange = (newTransaction) => {
    const newList = [...listTransactions, newTransaction];
    setLitsTransactions(newList);
    setNewList(newList);
  };

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  const obj = {
    description: description,
    value: parseInt(value),
    type: type,
  };

  return (
    <div className="Div-form">
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="Form-inputDescricao">
          <label className="Form-labelOne">Descrição</label>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            name="description"
            onChange={(event) => setDescription(event.target.value)}
          />
          <label className="Form-labelTwo">Ex:compra de roupas</label>
        </div>

        <div className="Form-inputSelect">
          <div className="Form-inputValor">
            <label>Valor</label>
            <input
              type="number"
              placeholder="R$"
              name="value"
              onChange={(event) => setValue(event.target.value)}
            />
          </div>

          <div className="Form-select">
            <label>Tipo de valor</label>
            <select onChange={(event) => setType(event.target.value)}>
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
        </div>
        <div className="Form-button">
          <button type="submit" onClick={() => handleChange(obj)}>
            Inserir valor
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
