import React from 'react'

function Ticket({send, state}) {

  const {passengers,selectedCountry} = state.context;

    const avanzar = () => {
        send("DONE")
    }
  return (
    <div>Ticket
      <p>Destino: {selectedCountry}</p>
      <p>Pasajeros: {passengers.map((passenger)=>
        <li key={passenger}>{passenger}</li>
      )}</p>
        <button onClick={avanzar}>Completar</button>
    </div>
  )
}

export default Ticket