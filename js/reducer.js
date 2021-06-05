let state = {count: 0};

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function render(){
  document.body.textContent = state.count
}


function dispatch(action) {
  state = changeState(state, action)
  render()
}

//when we call dispatch, this calls our changeState reducer, 
//and passes the action object to the reducer 

//when called, the changeState reducer also takes in state

//state is assigned the return value of changeState

dispatch({type: 'INCREASE_COUNT'})
dispatch({type: 'INCREASE_COUNT'})