import Initial from "../components/Inital";
import Search from "../components/Search";
import Passengers from "../components/Passengers.jsx";
import Ticket from "../components/Ticket.jsx";


export const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    if (state.matches("initial")) return <Initial send={send} />;
    if (state.matches("search")) return Search({ send,state });
    if (state.matches("passengers")) return Passengers({ send, state });
    if (state.matches("ticket")) return Ticket({ send });
    return null;
  };

  return <div>{renderContent()}</div>;
};
