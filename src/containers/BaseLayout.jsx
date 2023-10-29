import { useMachine } from "@xstate/react";
import bookingMachine from "../machines/bookingMachine";
import {StepsLayout} from "./StepsLayout";

const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log(state);
  
  // console.log("matches " + state.matches("initial"));
  // console.log("matches " + state.matches("tickets"));
  // console.log("matches " + state.can("FINISH"));

  return (
    <>
      <h1>State Machine</h1>
      <StepsLayout state={state} send={send}/>
    </>
  );
};

export default BaseLayout;
