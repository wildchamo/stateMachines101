import { useMachine } from "@xstate/react";
import bookingMachine from "../machines/bookingMachine";
import { StepsLayout } from "./StepsLayout";
import { Nav } from "./Nav.jsx";

const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log(state);

  // console.log("matches " + state.matches("initial"));
  // console.log("matches " + state.matches("tickets"));
  // console.log("matches " + state.can("FINISH"));

  return (
    <>
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send} />
    </>
  );
};

export default BaseLayout;
