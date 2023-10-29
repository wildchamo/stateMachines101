const Initial = ({ send }) => {
  const avanzar = () => {
    send("START");
  };
  return (
    <div>
      Estado inicial
      <button onClick={avanzar}>Avanzar!</button>
    </div>
  );
};

export default Initial;
