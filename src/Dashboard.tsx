import React from "react";
import { observer, inject } from "mobx-react";
import * as mobx from "mobx";

// @inject("auth")
class Dashboard extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.debug("componentDidMount", mobx.toJS(this.props.auth.user.role));
    console.debug("componentDidMount", mobx.toJS(this.props.auth.user.role));
  }

  componentDidUpdate() {
    console.debug("componentDidUpdate", this.props.auth.user.role); // WITHOUT toJS
  }

  render() {
    return <div>{this.props.auth.user.role}</div>;
  }
}

// export default Dashboard;
export default observer(Dashboard);
