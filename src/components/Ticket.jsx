import React from 'react'

function Ticket({send}) {

    const avanzar = () => {
        send("DONE")
    }
  return (
    <div>Ticket

        <button onClick={avanzar}>Completar</button>
    </div>
  )
}

export default Ticket