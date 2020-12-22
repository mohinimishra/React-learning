import React, { Fragment } from 'react';
import ReactDom from 'react-dom'
// const currentDate = new Date().toLocaleDateString()
// const currentTime = new Date().toLocaleTimeString()
// const Heading = "Hello Sir"
// let date = new Date()
// date = date.getHours()
// let greeting = '';
// let cssStyle = {}

// if (date >= 1 && date < 12) {
//   greeting = 'Good Morning';
//   cssStyle.color = "green"
// }
// else if (date >= 12 && date < 21) {
//   greeting = 'Good AfterNoon';
//   cssStyle.color = "orange"
// }
// else {
//   greeting = "Good Night"
//   cssStyle.color = "black"
// }

ReactDom.render(
    <React.Fragment>
        {/*  */}
        {/* <h2 contentEditable>This is Editable Content.</h2> */}
        {/* <h1>{Heading} <span style={cssStyle}> {greeting}</span></h1> */}
    </React.Fragment >,
    document.getElementById('roots'))