import * as R from 'ramda'
import React,{Component} from 'react'
import ReactDom from 'react-dom'

export const Welcome = ({name}) => <div> Welcome there {name}</div>
export const Time = ({second}) => <div> Seconds elapsed : {second}</div>
