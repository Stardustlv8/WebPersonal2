import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface CounterState {
    currentCount: number; 
}

export class Counter extends React.Component<RouteComponentProps<{}>, CounterState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{ this.state.currentCount }</strong></p>

            <button className="btn btn-primary" onClick={() => { this.incrementCounter() }}>Increment</button>

            <button className="btn btn-danger" onClick={() => { this.resetCounter() }}>Reset</button>

            <button className="btn btn-warning" onClick={() => { this.decrementCounter() }}>Decrement</button>

        </div>;
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    decrementCounter() {
        if (this.state.currentCount > 0) {
            this.setState({
                currentCount: this.state.currentCount - 1
            });
        }
    }

    resetCounter() {
        this.setState({
            currentCount: 0
        });
    }
}
