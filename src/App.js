import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";

// react-entrega-s1-nu-kenzie-kennedybm

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [newList, setNewList] = useState([]);
  const [homePage, setHomePage] = useState(false);

  return (
    <div className="App">
      <HomePage setHomePage={setHomePage} homePage={homePage} />

      <header className={homePage !== false ? "App-headerOff" : "App-header"}>
        <Nav setHomePage={setHomePage} />
      </header>

      <main className={homePage !== false ? "App-mainOff" : "App-main"}>
        <div className="Div-main">
          <Form
            listTransactions={listTransactions}
            setLitsTransactions={setListTransactions}
            setNewList={setNewList}
          />
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setNewList={setNewList}
            newList={newList}
          />
        </div>
        <TotalMoney listTransactions={listTransactions} />
      </main>
    </div>
  );
}

export default App;
