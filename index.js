import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import en from 'react-intl/locale-data/en'
import it from 'react-intl/locale-data/it'
import store from './src/Frontend/store'

import Container from './src/Frontend/Components/Container'

render(
    <Provider store={store}>
    <Container/>
    </Provider>
    ,document.getElementById('app')
);