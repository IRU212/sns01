import React from 'react';
import ReactDOM from 'react-dom';
import Header from './content/Header';
import Home from './Home';

function Example() {
    return (
        <div>
            <Header />
            <Home />
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
