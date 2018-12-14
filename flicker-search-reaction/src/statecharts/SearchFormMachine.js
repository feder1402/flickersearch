
  const Switch = Machine({
    id: "switch",
    initial: "enabled",
    context: {
      query: ''
    },
    states: {
      disabled: {
        on: { ENABLE: "enabled" }
      },
      enabled: {
        id: "enabled",
        initial: "empty",
        states: {
          empty: {},
          valid: { on: { SUBMIT: "done" } },
          invalid: {},
          changing: {
            on: [
              {
                target: "empty",
                cond: (ctx, event) => event.value.length === 0
              },
              {
                target: "valid",
                cond: (ctx, event) => event.value.length > 0
              }
            ]
          }
        },
        on: {
            ON_CHANGE: ".changing"
        }
      }
    },
    on: {
      DISABLE: "#switch.disabled"
    }
  });
  