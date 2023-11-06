import { assign, createMachine } from "xstate";

//Cómo hago una wildchard

const bookingMachine = createMachine(
  {
    id: "Buy plane tickets",
    initial: "initial",
    context: {
      passengers: [],
      selectedCountry: "",
    },
    states: {
      initial: {
        entry: assign((context, event) => {
          context.passengers = [];
          context.selectedCountry = "";
        }),
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
          CONTINUE: {
            target: "passengers",
            actions: assign({
              // no es una especie de función, sino, más bien, una asignación de valores
              selectedCountry: (context, event) => event.selectedCountry,
            }),
          },
          RETURN: "initial",
          CANCEL: {
            target: "initial",
            actions: assign({
              selectedCountry: (context, event) => "",
            }),
          },
        },
      },
      passengers: {
        on: {
          DONE: "ticket",
          CANCEL: "initial",
          ADD: {
            target: "passengers",
            actions: assign((context, event) =>
              context.passengers.push(event.newPassenger)
            ),
          },
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
