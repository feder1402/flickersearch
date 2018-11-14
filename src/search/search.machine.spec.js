export default {
  id: 'Flickr Search',
  initial: "initial",
  states : {
    initial: {
      on: {
        SEARCH: {
          target: "searching",
          cond: (ctx, event) => {
            console.log(JSON.stringify(ctx));
            return event.query && event.query.length > 0
          }
        }
      }
    },
    searching: {
      on: {
        RESULTS: "displaying_results"
      }
    },
    displaying_results: {
      on: {
        ZOOM: "zoomed_in"
      }
    },
    zoomed_in: {
      on: {
        ZOOM_OUT: "displaying_results"
      }
    }
  }
}
