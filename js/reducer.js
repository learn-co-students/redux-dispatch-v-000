function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function renderChangeForAction(action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      document.querySelector("#count").textContent = state.count
      break;
  
    default:
      break;
  }
}

function dispatch(action) {
  state = changeState(state, action)
  renderChangeForAction(action)
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

document.querySelector("#title").addEventListener("click", _=> dispatch({ type: "INCREASE_COUNT" }))