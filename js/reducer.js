let state = {count: 0};
let action = {type: 'INCREASE_COUNT'};

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action) {
  // If I add state to the arguments, it just reassigns the variable without modifying the original state.
  state = changeState(state, action);
  render();
  // return state;
}

function render() {
  document.body.textContent = state.count;
}

// changeState(state, action);
// dispatch(action);

render();
// dispatch(action);
// dispatch(action);