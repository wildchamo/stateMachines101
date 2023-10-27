import { createMachine } from "xstate";

const bookingMachine = createMachine({
  id: "Buy plane tickets",
  initial: "initial",
  states: {
    initial: {
      on: {
        START: "search",
      },
    },
    search: {
      on: {
        CONTINUE: "passengers",
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
});


export default bookingMachine;