import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import App from './App'
import counter from './reducers'
import {Provider} from "react-redux"

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)

render()
store.subscribe(render)