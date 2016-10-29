import App from './app'
import * as R from 'ramda'
import { createStore } from 'redux'
import {Counter} from './components/Counter'
import ReactDOM from 'react-dom'
import React,{Component} from 'react'

const lensSecond = R.lensProp('second')
const lensCount = R.lensProp('count')

const renderElement = document.getElementById('root')
const incrementCount = () => store.dispatch({type : "INCREMENT"})
const decrementCount = () => store.dispatch({type : "DECREMENT"})
const events ={
incrementCount,
decrementCount
}
let appState = {
    name : 'Selva',
    second: 0,
    count:0,
}

const counter = (state = appState, action) => {
      return R.equals(action.type,"INCREMENT") ? R.over(lensCount,R.inc)(state) :R.over(lensCount,R.dec)(state)
}

const store = createStore(counter);

const renderCounter = (node,events) => {
       return () => ReactDOM.render(<Counter txt={store.getState().count}  incre={events.incrementCount} decre={events.decrementCount}/>,node)
}
const renderedApp = renderCounter(renderElement,events)

const render = () => {
  ReactDOM.render(
    <Counter
       txt={store.getState().count}
       incre={incrementCount}
       decre={decrementCount}
    />,
    document.getElementById('root')
  );
};

//store.subscribe(render);
//render();

store.subscribe(renderedApp);
renderedApp();

//setInterval(()=>{
        //appState= R.over(lensSecond,R.inc)(appState)
        //renderedApp(appState)
//},1000)
//renderedApp(appState)

