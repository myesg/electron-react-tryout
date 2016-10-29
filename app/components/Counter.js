import * as R from 'ramda'
import React,{Component} from 'react'
import ReactDom from 'react-dom'

const Button = ({txt,eve}) => <button onClick={eve}>{txt}</button> 

export const Display = ({txt}) => <div>{txt}</div>

export const Counter = ({txt , incre ,decre })=> (
                <div>
                 <Display txt={txt} />
                 <Button txt = "Increment" eve={incre}/>
                 <Button txt = "Decrement" eve={decre}/>
                </div>

                )



