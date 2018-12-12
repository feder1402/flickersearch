const Switch = Machine({
    id: "switch",
    initial: "enabled",
    states: {
      enabled: {
        on: { DISABLE: "disabled" }
      },
      disabled: {
        id: "disabled",
        initial: "empty",
        states: {
            empty: {},
            valid: { on: { SUBMIT: "empty" } },
            invalid: {}
        },
        on: {
            INVALID: "invalid",
            VALID: "valid",
            EMPTY: "empty",
            ENABLE: "#switch.enabled" 
        }
      }
    }
  });
