import React, { Fragment } from 'react';
import ReactDom from 'react-dom'

const currentDate = new Date().toLocaleDateString()
const currentTime = new Date().toLocaleTimeString()


ReactDom.render(
  <React.Fragment>
    <h1>Date and Time</h1>
    <p>Current Date is {currentDate}</p>
    <p>Current Date is {currentTime}</p>

  </React.Fragment>,

  document.getElementById('root'))