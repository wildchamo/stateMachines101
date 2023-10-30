import { createMachine } from "xstate";

//Cómo hago una wildchard

const bookingMachine = createMachine(
  {
    id: "Buy plane tickets",
    initial: "initial",
    states: {
      initial: {
        on: {
          START: {
            target: "search",
            actions: "imprimirInicio",
          },
        },
      },
      search: {
        on: {
          CONTINUE: "passengers",
          RETURN: "initial",
          CANCEL: "initial",
        },
      },
      passengers: {
        on: {
          DONE: "ticket",
        },
      },
      ticket: {
        on: {
          FINISH: "initial",
        },
      },
    },
  },
  {
    actions: {
      imprimirInicio: () => {
        console.log("Listoo, mero inicio");
      },
    },
  } 
);

export default bookingMachine;
