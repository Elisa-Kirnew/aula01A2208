import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './styles.css';

function App() {

  const [input, setInput] = useState('')



  function aoClicar(){
    alert('O que o cara digitou: ' + input)
  }
  return (
    <div className="container">
      <h1 className="title"> Buscador de Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..." value={input} onChange={(e) =>setInput(e.target.value)}/>

        <button className="buttonSearch" onClick={aoClicar}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      <main className="main">
        <h2> Cep: 43828838248</h2>
        <span> Rua: fnksjdkdsdkj</span>
        <span> Bairro: fjadkfkadfj</span>
        <span> Estado: sldkjgçlsdkgjçlsd</span>
      </main>
    </div>
  );
}

export default App;

