import Initial from "../components/Inital";

export const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    if (state.matches("initial")) return <Initial send={send} />;
    if (state.matches("search"))
      return <h1 className="bg-amber-500 text-red">{state.value}</h1>;

    return null;
  };

  return <div>{renderContent()}</div>;
};
