import React, { lazy, Suspense } from 'react';
const Warning = lazy(() => import('./Warning'));

class App extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  decrement = () => {
    this.setState(state => ({ count: state.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello World.</h1>
        <h2 className={count > 3 ? 'warning' : null}>Count: {count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {count > 3 ? (
          <Suspense fallback={'loading..'}>
            <Warning />
          </Suspense>
        ) : null}
      </div>
    );
  }
}

export default App;
