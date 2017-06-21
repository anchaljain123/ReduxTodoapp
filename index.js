import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import store from './src/Frontend/store'
import Container from './src/Frontend/Components/Container'

render(
    <Provider store={store}>
    <Container/>
    </Provider>
    ,document.getElementById('app')
);