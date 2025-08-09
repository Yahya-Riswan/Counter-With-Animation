import { createStore, combineReducers } from "https://cdn.jsdelivr.net/npm/redux@4.2.1/es/redux.mjs";



const appReducer = combineReducers({
    counter,
    animation
})

function counter(prevState = 0, action) {
    switch (action.type) {
        case "Increment":
            return prevState + 1
        case "Decrement":
            return prevState - 1
        default:
            return prevState
    }
}
function animation(prevState = true, action) {
    switch (action.type) {
        case "Animation":
            return action.payload
        default:
            return prevState
    }
}


// Create store
const store = createStore(appReducer);

// Get initial state
const state = store.getState();

// Subscribe to store changes (update UI whenever state changes)
store.subscribe(() => {
    document.getElementById("Value").innerText = store.getState().counter;
    document.getElementById("animation").checked = store.getState().animation;
    AnimationUpdation(store.getState().animation)
});

// Initial UI update
document.getElementById("Value").innerText = state.counter;
document.getElementById("animation").checked = state.animation;
AnimationUpdation(state.animation)


//Function For Animation Updation
function AnimationUpdation(value) {
    if (value) {
        document.getElementById("add").classList.add("animation")
        document.getElementById("sub").classList.add("animation")
    } else {
        document.getElementById("add").classList.remove("animation")
        document.getElementById("sub").classList.remove("animation")
    }
}


//ActionCreater

//Increment
function Increment(){
    return{
        type:"Increment"
    }
}
//Decrement
function Decrement(){
    return{
        type:"Decrement"
    }
}
//Animation
function Animation(payload){
    return{
        type:"Animation",
        payload:payload
    }
}


//event Listeners

// Increment button click handler
document.getElementById("add").addEventListener('click', () => {
    store.dispatch(Increment());
});

// Decrement button click handler
document.getElementById("sub").addEventListener('click', () => {
    store.dispatch(Decrement());
});

// Animation Input Change handler
document.getElementById("animation").addEventListener('click', (e) => {
    store.dispatch(Animation(e.target.checked));
});