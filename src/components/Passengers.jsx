"use client";
import { useState } from "react";
function Passengers({ send, state }) {
  const {passengers} = state.context;
  const [newPassenger, setNewPassenger] = useState("");

  const avanzar = () => {
    send("DONE");
  };


  const agregarPasajero = (e) => {
    e.preventDefault();
    console.log(newPassenger);
    send("ADD", { newPassenger: newPassenger });
    setNewPassenger("");
  };

  return (
    <form onSubmit={agregarPasajero}>
      Passengers
      <input
        type="text"
        value={newPassenger}
        required
        onChange={(e) => setNewPassenger(e.target.value)}
      />
      <ul>
        {passengers.map((pasajero) => (
          <li key={pasajero}>{pasajero}</li>
        ))}
      </ul>
      <button type="submit">Agregar Pasajero</button>
      <button onClick={avanzar}>Completar</button>
    </form>
  );
}

export default Passengers;
