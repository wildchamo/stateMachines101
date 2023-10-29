import Initial from "../components/Inital";
import Search from "../components/Search";

export const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    if (state.matches("initial")) return <Initial send={send} />;
    if (state.matches("search")) return Search({ send });

    return null;
  };

  return <div>{renderContent()}</div>;
};
