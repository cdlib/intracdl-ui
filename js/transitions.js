// ***** Transition UI State Changes ***** //

// Uses the View Transitions API to create a brief cross-fade transition between UI states: https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API

// Browsers not supporting the API will still render a state change function passed in this function but without the transition.

const crossFadeTransition = stateChange => {
  if (!document.startViewTransition) {
    stateChange()
  } else {
    document.startViewTransition(() => stateChange())
  }
}

export { crossFadeTransition }
