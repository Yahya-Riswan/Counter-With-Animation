# Redux Counter with Animation Toggle

A simple JavaScript project demonstrating **Redux state management** in the browser, featuring:
- A counter with increment and decrement buttons.
- An animation toggle that enables/disables button animations.
- Pure **vanilla JS** + **Redux** (no React).

---

## 🚀 Features
- **Increment & Decrement Counter** — Controlled by Redux store.
- **Animation Toggle** — Switch animations on/off dynamically.
- **State Persistence in UI** — Automatically updates the DOM on state changes.
- **Separate Reducers** — Counter and Animation handled independently via `combineReducers`.

---

## 📂 Project Structure

.
├── index.html # HTML structure with buttons, toggle, and display
├── style.css # Styles and animation effects
└── script.js # Redux store, reducers, actions, and event handling


---

## 🛠 How It Works
1. **Reducers**:
   - `counter` reducer manages numeric count.
   - `animation` reducer manages animation state (true/false).
2. **combineReducers** merges them into `appReducer`.
3. **Redux Store** created with `createStore(appReducer)`.
4. **subscribe** updates the UI whenever state changes.
5. **Event Listeners** dispatch actions to update store.

---

## 📜 Example Actions
```js
// Increment
store.dispatch({ type: "Increment" });

// Decrement
store.dispatch({ type: "Decrement" });

// Toggle Animation
store.dispatch({ type: "Animation", payload: true });
```

---

## 🎨 CSS Animation Example

```css
.animation {
    transition: transform 0.2s ease;
}
.animation:hover {
    transform: scale(1.1);
}
.animation:active {
    transform: scale(0.95);
}
```

---


## ▶️ How to Run

Download project files.

Open index.html in a browser.

Use the buttons to increase/decrease the counter.

Use the toggle to enable/disable animations.


---

## 📦 Dependencies

Redux 4.2.1 (ES Module via CDN)
<script type="module" src="https://cdn.jsdelivr.net/npm/redux@4.2.1/es/redux.mjs"></script>

--- 

## 📷 Preview
![Project Demo](counterwithanimation.gif)


---


## 🧠 Concepts Learned
Using Redux without React.

Combining multiple reducers.

Subscribing to store updates.

DOM updates from Redux state.


---
