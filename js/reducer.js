function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

changeState(state, action)

// We currently have a problem. Let's call changeState multiple times [in the browser]...
// => {count: 1} ... // => {count: 1} ... // => {count: 1}
// See that? Our state never increases beyond one.

// Ok. So let's encapsulate this procedure in a function so that we can just call
// that method and it will persist our changes. We'll name that function dispatch.
function dispatch(action){
  state = changeState(state, action)
  // return state
  render() // Our number is displayed on the page.
}
// Ok, it's fixed!! Previously our state was stuck at one, but now we just call
// our dispatch function, and pass through our action. Let's walk through it.

// Ignoring React for a bit, how would we display something like this on a page?
// And how would we make sure that our HTML updates every time we change our state?
// Well, to render this on the page we can write a render function that changes our HTML:
function render(){
  document.body.textContent = state.count
}
// call the render function
render()
