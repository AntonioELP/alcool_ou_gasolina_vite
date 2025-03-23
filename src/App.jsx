import { useState } from "react";
import "./app.css";

// Componente que usa Props e Props Children
const Card = ({ title, children }) => {
  return (
    <>
      <div className="border p-4 rounded-lg shadow-md max-w-md mx-auto bg-white">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div>{children}</div>
      </div>
    </>
  );
};

// Componente com State para calcular a melhor opção de combustível
const FuelCalculator = () => {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularMelhorOpcao = () => {
    if (!alcool || !gasolina) {
      setResultado("Por favor, insira os valores corretamente.");
      return;
    }
    
    const proporcao = parseFloat(alcool) / parseFloat(gasolina);
    if (proporcao < 0.7) {
      setResultado("É mais vantajoso abastecer com Álcool.");
    } else {
      setResultado("É mais vantajoso abastecer com Gasolina.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-4 p-4">
        <label className="block mb-2">Valor do Álcool (R$):</label>
        <input
          type="number"
          value={alcool}
          onChange={(e) => setAlcool(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <label className="block mt-2 mb-2">Valor da Gasolina (R$):</label>
        <input
          type="number"
          value={gasolina}
          onChange={(e) => setGasolina(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          onClick={calcularMelhorOpcao}
        >
          Calcular
        </button>

        {resultado && <p className="mt-4 font-bold">{resultado}</p>}
      </div>
    </>
  );
};

// Componente Principal
import etanolGasolina from "./assets/etanol-gasolina.png";

const App = () => {
  return (
    <>
      <div className="container">
        <img src={etanolGasolina} alt="Comparação entre etanol e gasolina" className="w-32 mb-4" />
        <Card title="Álcool ou Gasolina?">
          <p>Insira os valores abaixo para descobrir qual combustível é mais vantajoso.</p>
        </Card>
        <FuelCalculator />
      </div>
    </>
  );
};



export default App;
