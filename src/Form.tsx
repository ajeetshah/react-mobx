import React, { Component } from "react";
import { observer } from "mobx-react";

class Form extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  submitReview = (e) => {
    e.preventDefault();
    this.props.store.authenticate("TOKEN" + Math.random());
  };

  render() {
    return (
      <div className="formSection">
        <form onSubmit={this.submitReview}>
          <button className="btn btn-success" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default observer(Form);
