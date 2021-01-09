import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Feedback from './components/feedback/feedback.js';

class App extends Component {
  render() {
    return(
     <Feedback/>
    )
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('content'));