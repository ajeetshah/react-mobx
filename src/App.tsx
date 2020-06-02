import React, { Component } from "react";
// import { decorate, observable, action, computed } from "mobx";

import Form from "./Form";
import Dashboard from "./Dashboard";
import Store from "./store";

// decorate(Store, {
//   foo: observable,
//   addFoo: action,
// });

const store = new Store();

class App extends Component<any, any> {
  render() {
    return (
      <div className="container">
        <Form store={store} />
        <Dashboard auth={store} />
      </div>
    );
  }
}

export default App;
