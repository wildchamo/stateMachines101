import { assign, createMachine } from "xstate";
import { fetchCountries } from "../utils/api";

//Cómo hago una wildchard

const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: "getCountries",
        src: () => fetchCountries,
        onDone: {
          target: "success",
          actions: assign({
            countries: (context, event) => event.data,
          }),
        },
        onError: {
          target: "failure",
          actions: assign({
            error: " Fallo el request",
          }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};

const bookingMachine = createMachine(
  {
    id: "Buy plane tickets",
    initial: "initial",
    context: {
      passengers: [],
      selectedCountry: "",
      countries: [],
      error: "",
    },
    states: {
      initial: {
        entry: "cleanContext",
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
            actions: "cleanContext",
          },
        },
        ...fillCountries,
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
      cleanContext: assign({
        selectedCountry: "",
        passengers: [],
      }),
    },
  }
);

export default bookingMachine;
