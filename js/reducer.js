let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}
const body = document.getElementsByTagName("body")[0]
const countP = document.createElement("p")
    countP.textContent = state.count
body.appendChild(countP)

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}


changeState(state, action)
const incrementButton = document.createElement("input")
    incrementButton.type = "button"
    incrementButton.value = "Increment"
    incrementButton.addEventListener("click", () => dispatch({ type: "INCREASE_COUNT" }))
body.appendChild(incrementButton)

function dispatch(action){
    state = changeState(state, action)
    render()
    return state
}

function render(){
    countP.textContent = state.count
}
