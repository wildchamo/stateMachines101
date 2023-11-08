import { useState } from "react";

const Search = ({ send, state }) => {
  const { countries } = state.context;
  const [selectedCountry, setSelectedCountry] = useState("");

  const avanzar = () => {
    send("CONTINUE", {
      selectedCountry: selectedCountry,
    });
  };
  const regresar = () => {
    send("RETURN");
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelectedCountry(e.target.value);
  };

  return (
    <div>
      Buscando <br />
      <select name="" id="" onChange={handleSelect}>
        {countries.map((country) => (
          <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
        ))}
      </select>
      <button onClick={regresar}>Regresar</button>
      <button onClick={avanzar}>Avanzar!</button>
    </div>
  );
};

export default Search;
