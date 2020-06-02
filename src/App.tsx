import React, { Component } from "react";
import { decorate, observable, action, computed } from "mobx";
import "./App.css";

import Form from "./Form";
import Dashboard from "./Dashboard";
import Reviews from "./Reviews";
import Store from "./store";

// decorate(Store, {
//   reviewList: observable,
//   addReview: action,
//   // averageScore: computed,
//   // reviewCount: computed,
//   foo: observable,
//   addFoo: action,
// });

const reviewStore = new Store();

class App extends Component<any, any> {
  render() {
    return (
      <div className="container">
        <Form store={reviewStore} />
        {/* <Dashboard /> */}
        <Dashboard auth={reviewStore} />
        {/* <Reviews store={reviewStore} /> */}
      </div>
    );
  }
}

export default App;
