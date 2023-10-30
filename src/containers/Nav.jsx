export const Nav = ({ state, send }) => {
  const cancelarVuelo = () => {
    send("CANCEL");
  };
  return (
    <nav>
      <h1>Book a Fly! 🛩️</h1>

      {!state.matches("initial") && (
        <button onClick={cancelarVuelo}>Cancelar</button>
      )}
    </nav>
  );
};
