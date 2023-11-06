import { useState } from "react";

const Search = ({ send }) => {
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
        <option value="Colombia">Colombia</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Venezuela">Venezuela</option>
      </select>
      <button onClick={regresar}>Regresar</button>
      <button onClick={avanzar}>Avanzar!</button>
    </div>
  );
};

export default Search;
