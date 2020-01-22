function changeState(state = { count: 0 }, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

let state;
let action = {type: 'INCREASE_COUNT'}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  document.body.textContent = state.count;
}

dispatch({ type: 'beef' })
