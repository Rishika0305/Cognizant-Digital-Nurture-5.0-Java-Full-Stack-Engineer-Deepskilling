import { useState } from "react";

function CurrencyConverter() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  function convert() {
    const result = (Number(rupees) / 90).toFixed(2);
    setEuro(result);
  }

  return (
    <div style={{ margin: "20px" }}>
      <h1>Currency Converter</h1>

      <label>Indian Rupees:</label>
      <br />
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />

      <br /><br />

      <button onClick={convert}>
        Convert to Euro
      </button>

      <br /><br />

      <h2>Euro: {euro}</h2>
    </div>
  );
}

export default CurrencyConverter;