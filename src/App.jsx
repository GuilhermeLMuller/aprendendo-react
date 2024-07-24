import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [tituloDaTarefa, setTituloDaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function handleOnClick() {
    setTarefas([...tarefas, tituloDaTarefa]);
  }

  return (
    <>
      <input
        type="text"
        value={tituloDaTarefa}
        onChange={(e) => {
          setTituloDaTarefa(e.target.value);
        }}
      />
      <input type="button" value="adicionar tarefa" onClick={handleOnClick} />
      {tarefas.map((title) => {
        return <p>{title}</p>;
      })}
    </>
  );
}

export default App;
