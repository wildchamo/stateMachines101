import React from 'react'

function Passengers({send}) {

    const avanzar = () => {
        send("DONE")
    }
  return (
    <div>Passengers

        <button onClick={avanzar}>Completar</button>
    </div>
  )
}

export default Passengers