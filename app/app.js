import * as R from 'ramda'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Welcome,Time } from './components/HelloWorld'
import {Counter} from './components/Counter'


const App = state =>(
                <div>
                <Welcome name = {state.name}/>
                <Time second = {state.second}/>
                <Counter txt = {state.count} incre={incrementCount} decre={decrementCount}/>
                </div>
                )
App.render = R.curry((node,props) => ReactDOM.render(<App {...props}/>,node))

export default App

