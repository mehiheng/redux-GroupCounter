import React, { Component } from 'react';
import Groupcounter from './component/groupCounter'

class App extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Groupcounter num={2}/>

    );
    }
}

export default App;