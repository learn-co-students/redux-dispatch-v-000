function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

let state = {count: 0}

function render() {
	document.body.textContent = state.count
}

function dispatch(action) {
	state = changeState(state, action)
	render()
}

render()