import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("content");
    
    ReactDOM.render(<Root />, root)

    const store = configureStore();
    window.store = store;
    
});