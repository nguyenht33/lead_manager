import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header';
import Dashboard from './leads/Dashboard';

class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <Header />
                    <Dashboard />
                </div>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));