import React from "react";
import { observer, inject } from "mobx-react";
import * as mobx from "mobx";
import AuthStore from "./store";

@inject("auth")
export default class Dashboard extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.debug("props", mobx.toJS(this.props.auth.user.role));
  }

  render() {
    return (
      <div className="dashboardSection">
        <div className="row">
          <div className="col-md-6">
            <div className="card text-white bg-primary mb-6">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <i className="fa fa-comments fa-5x" />
                  </div>
                  <div className="col-md-6 text-right">
                    {/* <p id="reviewCount">{props.reviewCount}</p> */}
                    {this.props.auth.user.role}
                    <p className="announcement-text">Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card text-white bg-success mb-6">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <i className="fa fa-star fa-5x" />
                  </div>
                  <div className="col-md-6 text-right">
                    {/* <p id="averageScores">{props.averageScore}</p> */}
                    <p className="announcement-text">Average Scores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default observer(Dashboard);
