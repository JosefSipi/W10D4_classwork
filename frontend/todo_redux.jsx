import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("content");
    const store = configureStore();
    window.store = store;
    debugger
    ReactDOM.render(<Root store={store}/>, root)

    
});