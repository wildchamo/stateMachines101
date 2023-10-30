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
        entry: "entrando",
        exit: "saliendo",
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
      entrando: () => {
        console.log("entrando Papito");
      },
      saliendo: () => {
        console.log("saliendo Papito");
      },
    },
  }
);

export default bookingMachine;
